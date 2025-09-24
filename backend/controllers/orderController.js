const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');

exports.createOrder = async (req, res) => {
  try {
    const { items, shippingAddress } = req.body;
    
    if (!items || items.length === 0) {
      return res.status(400).json({ msg: 'No items in order' });
    }

    let total = 0;
    const orderItems = [];

    // Process each item and calculate total
    for (let item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(404).json({ msg: `Product not found: ${item.productId}` });
      }
      
      const orderItem = {
        product: product._id,
        name: product.name,
        quantity: item.quantity || 1,
        price: product.price,
        size: item.size || '10'
      };
      
      total += product.price * orderItem.quantity;
      orderItems.push(orderItem);
    }

    // Create order
    const order = new Order({
      user: req.user.id,
      items: orderItems,
      total: parseFloat(total.toFixed(2)),
      shippingAddress
    });

    await order.save();
    
    // Populate order details
    await order.populate('user', 'name email');
    await order.populate('items.product', 'name image');
    
    res.json(order);
  } catch (error) {
    console.error('Create order error:', error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate('items.product', 'name image')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error('Get user orders error:', error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const { status } = req.query;
    let filter = {};
    
    if (status && status !== 'All') {
      filter.status = status;
    }

    const orders = await Order.find(filter)
      .populate('user', 'name email')
      .populate('items.product', 'name image')
      .populate('approvedBy', 'name')
      .sort({ createdAt: -1 });
    
    res.json(orders);
  } catch (error) {
    console.error('Get all orders error:', error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { status, adminNote } = req.body;
    
    if (!['Pending', 'Approved', 'Declined'].includes(status)) {
      return res.status(400).json({ msg: 'Invalid status' });
    }

    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    order.status = status;
    order.adminNote = adminNote || '';
    order.approvedBy = req.user.id;
    order.approvedAt = new Date();

    await order.save();
    
    // Populate updated order
    await order.populate('user', 'name email');
    await order.populate('items.product', 'name image');
    await order.populate('approvedBy', 'name');

    res.json(order);
  } catch (error) {
    console.error('Update order status error:', error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email')
      .populate('items.product', 'name image')
      .populate('approvedBy', 'name');

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error('Get order by ID error:', error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};
