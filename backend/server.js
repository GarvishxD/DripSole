const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const connectDB = require('./config/db');

const User = require('./models/User');
const Order = require('./models/Order');
const Product = require('./models/Product');

const { authenticateToken, JWT_SECRET } = require('./middleware/auth');

const app = express();

// ================== CONNECT DB ==================
connectDB();

// ================== MIDDLEWARE ==================
app.use(cors());
app.use(express.json());

// ================== SERVE STATIC FILES (React Frontend) ==================
const frontendBuildPath = path.join(__dirname, '../frontend/build');
app.use(express.static(frontendBuildPath));

// ================== TEST ROUTE ==================
app.get('/', (req, res) => {
  res.json({ message: 'DripSole Backend is working with MongoDB!' });
});

// ================== PRODUCTS (New Route) ==================
app.get('/products', async (req, res) => {
  try {
    const { category, type } = req.query;

    let query = {};

    if (type && type !== 'all') {
      // Handle case-insensitive type matching
      query.type = { $regex: new RegExp(`^${type}$`, 'i') };
    }

    if (category && category !== 'all') {
      query.category = category;
    }

    const products = await Product.find(query);

    console.log(`📦 Serving ${products.length} products from DB`);
    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error fetching products' 
    });
  }
});

// ================== PRODUCTS ==================
app.get('/api/products', async (req, res) => {
  try {
    const { category, type } = req.query;

    let query = {};

    if (type && type !== 'all') {
      const formattedType = type.charAt(0).toUpperCase() + type.slice(1);
      query.type = formattedType;
    }

    if (category && category !== 'all') {
      query.category = category;
    }

    const products = await Product.find(query);

    console.log(`📦 Serving ${products.length} products from DB`);
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error fetching products' });
  }
});

// ================== SINGLE PRODUCT ==================
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);

    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(500).json({ message: 'Server error' });
  }
});

// ================== AUTH ==================
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Fill all fields' });
    }

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({
      name,
      email: normalizedEmail,
      password,
      isAdmin: normalizedEmail === (process.env.ADMIN_EMAIL || 'admin@dripsole.com')
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

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
    console.error(error);
    res.status(500).json({ message: 'Register error' });
  }
});

// ================== LOGIN ==================
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    const user = await User.findOne({ email: normalizedEmail });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

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
    console.error(error);
    res.status(500).json({ message: 'Login error' });
  }
});

// ================== CURRENT USER ==================
app.get('/api/auth/user', authenticateToken, (req, res) => {
  res.json(req.user);
});

// ================== ORDERS ==================
app.get('/api/orders', authenticateToken, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

app.post('/api/orders', authenticateToken, async (req, res) => {
  try {
    const { items, shippingAddress } = req.body;

    const totalAmount = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

    const order = new Order({
      user: req.user._id,
      items,
      totalAmount,
      shippingAddress
    });

    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Order error' });
  }
});

// ================== ADMIN ==================
app.get('/api/admin/orders', authenticateToken, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'Admin only' });
  }

  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

app.put('/api/admin/orders/:id', authenticateToken, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'Admin only' });
  }

  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(order);
});

// ================== CATCH-ALL ROUTE FOR REACT ==================
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendBuildPath, 'index.html'));
});

// ================== START SERVER ==================
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);

  const total = await Product.countDocuments();
  console.log(`📊 Total Products in DB: ${total}`);
});