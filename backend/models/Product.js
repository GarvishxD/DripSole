const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, default: 'Premium product' },
  type: {
    type: String,
    enum: ['Shoes', 'Clothing', 'Accessories'],
    required: true
  },
  category: {
    type: String,
    enum: ['men', 'women', 'children'],
    required: true
  },
  sizes: [String],
  brand: { type: String, default: 'DripSole' }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);