const express = require('express');
const router = express.Router();

console.log('🛍️ Products route loaded');

// GET all products
router.get('/', (req, res) => {
  console.log('📦 Products endpoint called');
  
  // Sample products data
  const sampleProducts = [
    {
      _id: "1",
      name: "Air Force Premium",
      price: 129.99,
      image: "shoe1.jpg",
      description: "Classic white sneakers with premium leather construction",
      sizes: ["8", "9", "10", "11", "12"],
      inStock: true
    },
    {
      _id: "2", 
      name: "Urban Runner Black",
      price: 159.99,
      image: "shoe2.jpg",
      description: "Sleek black running shoes with advanced cushioning",
      sizes: ["7", "8", "9", "10", "11"],
      inStock: true
    },
    {
      _id: "3",
      name: "Street Style High-Top", 
      price: 189.99,
      image: "shoe3.jpg",
      description: "Trendy high-top sneakers for street fashion enthusiasts",
      sizes: ["8", "9", "10", "11"],
      inStock: true
    },
    {
      _id: "4",
      name: "Comfort Walk Brown",
      price: 99.99, 
      image: "shoe4.jpg",
      description: "Comfortable brown casual shoes for everyday wear",
      sizes: ["8", "9", "10", "11", "12"],
      inStock: true
    },
    {
      _id: "5",
      name: "Sport Elite Blue",
      price: 199.99,
      image: "shoe5.jpg", 
      description: "Performance sports shoes with blue accents",
      sizes: ["7", "8", "9", "10", "11", "12"],
      inStock: true
    }
  ];

  res.json({
    success: true,
    count: sampleProducts.length,
    products: sampleProducts
  });
});

// GET single product by ID
router.get('/:id', (req, res) => {
  console.log(`📦 Single product requested: ${req.params.id}`);
  res.json({
    success: true,
    product: {
      _id: req.params.id,
      name: "Sample Product",
      price: 99.99,
      image: "shoe1.jpg",
      description: "Sample product description"
    }
  });
});

console.log('✅ Products routes configured');
module.exports = router;
