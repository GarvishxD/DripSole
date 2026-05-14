const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');

console.log('🛍️ Products route loaded');

// GET all products with filtering
router.get('/', async (req, res) => {
  try {
    console.log('📦 Products endpoint called with filters:', req.query);
    
    const filters = {};
    
    // Filter by type (case-insensitive)
    if (req.query.type) {
      filters.type = { $regex: new RegExp(`^${req.query.type}$`, 'i') };
    }
    
    // Filter by category
    if (req.query.category && req.query.category !== 'all') {
      filters.category = req.query.category;
    }
    
    const products = await Product.find(filters)
      .limit(40)
      .sort({ createdAt: -1 });
    
    console.log(`✅ Found ${products.length} products`);
    
    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    console.error('Products error:', error.message);
    res.status(500).json({ 
      success: false,
      msg: 'Server Error' 
    });
  }
});

// GET single product by ID
router.get('/:id', async (req, res) => {
  try {
    console.log(`📦 Single product requested: ${req.params.id}`);
    
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ 
        success: false,
        msg: 'Product not found' 
      });
    }
    
    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error('Get product error:', error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ 
        success: false,
        msg: 'Product not found' 
      });
    }
    res.status(500).json({ 
      success: false,
      msg: 'Server Error' 
    });
  }
});

// POST create product (admin only)
router.post('/', auth, async (req, res) => {
  try {
    const { name, type, category, price, description, sizes, image, countInStock } = req.body;

    if (!name || !type || !price || !image) {
      return res.status(400).json({ 
        success: false,
        msg: 'Name, type, price, and image are required' 
      });
    }

    const product = new Product({
      name,
      type,
      category: category || 'unisex',
      price,
      description: description || '',
      sizes: sizes || ['One Size'],
      image,
      countInStock: countInStock || 0
    });

    await product.save();
    
    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error('Create product error:', error.message);
    res.status(500).json({ 
      success: false,
      msg: 'Server Error' 
    });
  }
});

console.log('✅ Products routes configured');
module.exports = router;
