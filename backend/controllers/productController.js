const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({ inStock: true })
      .limit(40)
      .sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    console.error('Get products error:', error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Get product error:', error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.status(500).json({ msg: 'Server Error' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price, image, description, sizes } = req.body;

    if (!name || !price || !image) {
      return res.status(400).json({ msg: 'Name, price, and image are required' });
    }

    const product = new Product({
      name,
      price,
      image,
      description,
      sizes: sizes || ['8', '9', '10', '11']
    });

    await product.save();
    res.json(product);
  } catch (error) {
    console.error('Create product error:', error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, price, image, description, inStock, sizes } = req.body;

    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, image, description, inStock, sizes },
      { new: true }
    );

    res.json(product);
  } catch (error) {
    console.error('Update product error:', error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Product deleted successfully' });
  } catch (error) {
    console.error('Delete product error:', error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};
