const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: 'Premium quality shoes',
  },
  category: {
    type: String,
    default: 'Shoes',
  },
  brand: {
    type: String,
    default: 'DripSole'
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  sizes: [{
    type: String,
    enum: ['6', '7', '8', '9', '10', '11', '12']
  }]
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', ProductSchema);
