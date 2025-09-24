const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User');
const Product = require('./models/Product');

const sampleProducts = [
  {
    name: "Air Force Premium",
    price: 129.99,
    image: "shoe1.jpg",
    description: "Classic white sneakers with premium leather construction",
    sizes: ["8", "9", "10", "11", "12"]
  },
  {
    name: "Urban Runner Black",
    price: 159.99,
    image: "shoe2.jpg", 
    description: "Sleek black running shoes with advanced cushioning",
    sizes: ["7", "8", "9", "10", "11"]
  },
  {
    name: "Street Style High-Top",
    price: 189.99,
    image: "shoe3.jpg",
    description: "Trendy high-top sneakers for street fashion enthusiasts",
    sizes: ["8", "9", "10", "11"]
  },
  {
    name: "Comfort Walk Brown",
    price: 99.99,
    image: "shoe4.jpg",
    description: "Comfortable brown casual shoes for everyday wear",
    sizes: ["8", "9", "10", "11", "12"]
  },
  {
    name: "Sport Elite Blue",
    price: 199.99,
    image: "shoe5.jpg",
    description: "Performance sports shoes with blue accents",
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    name: "Classic Canvas Red",
    price: 79.99,
    image: "shoe6.jpg",
    description: "Vintage-style red canvas sneakers",
    sizes: ["6", "7", "8", "9", "10", "11"]
  },
  {
    name: "Luxury Leather Black",
    price: 249.99,
    image: "shoe7.jpg",
    description: "Premium black leather dress shoes",
    sizes: ["8", "9", "10", "11", "12"]
  },
  {
    name: "Outdoor Adventure",
    price: 169.99,
    image: "shoe8.jpg",
    description: "Rugged outdoor shoes for hiking and adventure",
    sizes: ["8", "9", "10", "11", "12"]
  }
];

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected for seeding...');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const seedDatabase = async () => {
  try {
    await connectDB();
    
    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    
    // Create admin user
    const adminPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10);
    const adminUser = new User({
      name: 'Admin User',
      email: process.env.ADMIN_EMAIL || 'admin@dripsole.com',
      password: adminPassword,
      isAdmin: true
    });
    await adminUser.save();
    console.log('Admin user created');
    
    // Create sample products
    for (const productData of sampleProducts) {
      const product = new Product(productData);
      await product.save();
    }
    console.log(`${sampleProducts.length} sample products created`);
    
    console.log('Database seeded successfully!');
    console.log('Admin Login:');
    console.log('Email:', process.env.ADMIN_EMAIL || 'admin@dripsole.com');
    console.log('Password:', process.env.ADMIN_PASSWORD || 'admin123');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedDatabase();
