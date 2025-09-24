const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/db');
const User = require('./models/User');
const Order = require('./models/Order');
const { authenticateToken, JWT_SECRET } = require('./middleware/auth');

// Import product data
const products = require('./data/products');
const clothing = require('./data/clothing');
const accessories = require('./data/accessories');

const app = express();

// Connect to MongoDB
connectDB();

// Basic middleware
app.use(cors());
app.use(express.json());

// Simple test route
app.get('/', (req, res) => {
  res.json({ message: 'DripSole Backend is working with MongoDB!' });
});

// Combined products route (shoes + clothing + accessories)
app.get('/api/products', (req, res) => {
  const { category, type } = req.query;
  
  let allProducts = [...products, ...clothing, ...accessories];
  
  if (type) {
    if (type === 'shoes') allProducts = products;
    else if (type === 'clothing') allProducts = clothing;
    else if (type === 'accessories') allProducts = accessories;
  }
  
  if (category && category !== 'all') {
    allProducts = allProducts.filter(product => product.category === category);
  }
  
  console.log(`📦 Serving ${allProducts.length} products for category: ${category || 'all'}, type: ${type || 'all'}`);
  
  res.json(allProducts);
});

// Individual product type routes
app.get('/api/shoes', (req, res) => {
  const { category } = req.query;
  let filteredProducts = products;
  
  if (category && category !== 'all') {
    filteredProducts = products.filter(product => product.category === category);
  }
  
  console.log(`👟 Serving ${filteredProducts.length} shoes for category: ${category || 'all'}`);
  res.json(filteredProducts);
});

app.get('/api/clothing', (req, res) => {
  const { category } = req.query;
  let filteredClothing = clothing;
  
  if (category && category !== 'all') {
    filteredClothing = clothing.filter(item => item.category === category);
  }
  
  console.log(`👕 Serving ${filteredClothing.length} clothing items for category: ${category || 'all'}`);
  res.json(filteredClothing);
});

app.get('/api/accessories', (req, res) => {
  const { category } = req.query;
  let filteredAccessories = accessories;
  
  if (category && category !== 'all') {
    filteredAccessories = accessories.filter(item => item.category === category);
  }
  
  console.log(`👜 Serving ${filteredAccessories.length} accessories for category: ${category || 'all'}`);
  res.json(filteredAccessories);
});

// Get single product (shoes, clothing, or accessories)
app.get('/api/products/:id', (req, res) => {
  const allProducts = [...products, ...clothing, ...accessories];
  const product = allProducts.find(p => p._id === req.params.id);
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  console.log(`🔍 Serving product: ${product.name}`);
  res.json(product);
});

// AUTH ROUTES WITH MONGODB
app.post('/api/auth/register', async (req, res) => {
  try {
    console.log('📝 Registration attempt:', req.body);
    
    const { name, email, password } = req.body;
    
    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ 
        message: 'Please fill all fields' 
      });
    }
    
    if (password.length < 6) {
      return res.status(400).json({ 
        message: 'Password must be at least 6 characters' 
      });
    }
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }
    
    // Create new user
    const user = new User({
      name,
      email,
      password,
      isAdmin: email === 'admin@dripsole.com'
    });
    
    await user.save();
    
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });
    
    console.log('✅ User registered successfully:', user.email);
    
    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
      }
    });
    
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    console.log('🔐 Login attempt:', req.body);
    
    const { email, password } = req.body;
    
    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'Please fill all fields' 
      });
    }
    
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    
    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });
    
    console.log('✅ User logged in successfully:', user.email);
    
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
      }
    });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// Get current user info (protected route)
app.get('/api/auth/user', authenticateToken, (req, res) => {
  res.json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin
  });
});

// ORDERS ROUTES WITH MONGODB
app.get('/api/orders', authenticateToken, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .populate('user', 'name email');
    
    console.log(`📋 Serving ${orders.length} orders for user: ${req.user.email}`);
    res.json(orders);
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

app.post('/api/orders', authenticateToken, async (req, res) => {
  try {
    console.log('🛒 Order attempt:', req.body);
    
    const { items, shippingAddress, paymentMethod, notes } = req.body;
    
    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Order must contain at least one item' });
    }
    
    if (!shippingAddress) {
      return res.status(400).json({ message: 'Shipping address is required' });
    }
    
    // Calculate total amount
    const totalAmount = items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
    
    // Create new order
    const order = new Order({
      user: req.user._id,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod: paymentMethod || 'cod',
      notes: notes || ''
    });
    
    await order.save();
    
    console.log('✅ Order created successfully:', order._id);
    
    res.status(201).json({
      success: true,
      order,
      message: 'Order placed successfully!'
    });
    
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ message: 'Error creating order' });
  }
});

// Get all orders for admin
app.get('/api/admin/orders', authenticateToken, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Admin access required' });
    }
    
    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .populate('user', 'name email');
    
    console.log(`👑 Admin serving ${orders.length} orders`);
    res.json(orders);
  } catch (error) {
    console.error('Admin get orders error:', error);
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

// Update order status (admin only)
app.put('/api/admin/orders/:id', authenticateToken, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Admin access required' });
    }
    
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).populate('user', 'name email');
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    console.log(`👑 Admin updated order ${order._id} status to: ${status}`);
    res.json(order);
  } catch (error) {
    console.error('Admin update order error:', error);
    res.status(500).json({ message: 'Error updating order' });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log('✅ DripSole Server running on port 5000');
  console.log('🔗 Available endpoints:');
  console.log('   GET  / - Server status');
  console.log('   GET  /api/products - All products');
  console.log('   GET  /api/products/:id - Single product');
  console.log('   GET  /api/shoes - Shoes endpoint');
  console.log('   GET  /api/clothing - Clothing endpoint');
  console.log('   GET  /api/accessories - Accessories endpoint');
  console.log('   POST /api/auth/register - User registration');
  console.log('   POST /api/auth/login - User login');
  console.log('   GET  /api/auth/user - Get current user');
  console.log('   GET  /api/orders - Get user orders');
  console.log('   POST /api/orders - Create order');
  console.log('   GET  /api/admin/orders - Get all orders (admin)');
  console.log('   PUT  /api/admin/orders/:id - Update order status (admin)');
  
  // Log product counts
  const menShoes = products.filter(p => p.category === 'men').length;
  const womenShoes = products.filter(p => p.category === 'women').length;
  const childrenShoes = products.filter(p => p.category === 'children').length;
  
  const menClothing = clothing.filter(p => p.category === 'men').length;
  const womenClothing = clothing.filter(p => p.category === 'women').length;
  const childrenClothing = clothing.filter(p => p.category === 'children').length;
  
  const menAccessories = accessories.filter(p => p.category === 'men').length;
  const womenAccessories = accessories.filter(p => p.category === 'women').length;
  const childrenAccessories = accessories.filter(p => p.category === 'children').length;
  
  console.log('📊 Product Statistics:');
  console.log(`👟 Shoes - Men: ${menShoes}, Women: ${womenShoes}, Children: ${childrenShoes}`);
  console.log(`👕 Clothing - Men: ${menClothing}, Women: ${womenClothing}, Children: ${childrenClothing}`);
  console.log(`👜 Accessories - Men: ${menAccessories}, Women: ${womenAccessories}, Children: ${childrenAccessories}`);
  console.log(`📦 Total: ${products.length + clothing.length + accessories.length} products`);
});
