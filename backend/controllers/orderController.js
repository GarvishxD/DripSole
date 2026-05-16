const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');
exports.createOrder = async (req, res) => {
  try {

    const { items, shippingAddress } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        msg: 'No items in order'
      });
    }

    let total = 0;

    const orderItems = [];

    for (let item of items) {

      const orderItem = {
        name: item.name,
        image: item.image,
        category: item.category,
        type: item.type,
        selectedSize: item.selectedSize,
        quantity: item.quantity || 1,
        price: item.price
      };

      total += item.price * orderItem.quantity;

      orderItems.push(orderItem);
    }

    const order = new Order({
      user: req.user.id,
      items: orderItems,
      shippingAddress,
      total
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      msg: error.message
    });
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
