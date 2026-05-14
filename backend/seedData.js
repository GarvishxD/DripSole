require('dotenv').config();

const connectDB = require('./config/db');
const Product = require('./models/Product');

const allProducts = [
  // ============= SHOES =============
  // Men's Shoes
  { name: 'Nike Air Max', type: 'Shoes', category: 'men', price: 4999, countInStock: 10, description: 'Premium Nike running shoes with advanced cushioning', sizes: ['6', '7', '8', '9', '10', '11', '12'], image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Puma Sports Shoes', type: 'Shoes', category: 'men', price: 4599, countInStock: 7, description: 'Stylish Puma sports shoes for athletic performance', sizes: ['6', '7', '8', '9', '10', '11'], image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Jordan Retro', type: 'Shoes', category: 'men', price: 7499, countInStock: 5, description: 'Classic Jordan retro sneakers', sizes: ['7', '8', '9', '10', '11', '12'], image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=80' },
  { name: 'New Balance Running', type: 'Shoes', category: 'men', price: 5299, countInStock: 8, description: 'Comfortable New Balance running shoes', sizes: ['6', '7', '8', '9', '10', '11', '12'], image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Converse High Top', type: 'Shoes', category: 'men', price: 3599, countInStock: 12, description: 'Classic Converse high-top canvas shoes', sizes: ['6', '7', '8', '9', '10', '11'], image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80' },
  
  // Women's Shoes
  { name: 'Adidas Ultraboost', type: 'Shoes', category: 'women', price: 5999, countInStock: 8, description: 'Comfortable Adidas ultraboost sneakers', sizes: ['5', '6', '7', '8', '9', '10'], image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Running Shoes', type: 'Shoes', category: 'women', price: 3999, countInStock: 11, description: 'Lightweight running shoes for women', sizes: ['5', '6', '7', '8', '9', '10'], image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Nike Court Royale', type: 'Shoes', category: 'women', price: 4299, countInStock: 9, description: 'Elegant Nike court royale shoes', sizes: ['5', '6', '7', '8', '9'], image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Adidas Stan Smith', type: 'Shoes', category: 'women', price: 3899, countInStock: 13, description: 'Classic Adidas stan smith white sneakers', sizes: ['5', '6', '7', '8', '9', '10'], image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Puma Platform', type: 'Shoes', category: 'women', price: 4199, countInStock: 10, description: 'Trendy Puma platform shoes', sizes: ['5', '6', '7', '8', '9'], image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80' },
  
  // Kids' Shoes
  { name: 'Nike Kids Air', type: 'Shoes', category: 'children', price: 2999, countInStock: 15, description: 'Nike air shoes for kids', sizes: ['1', '2', '3', '4', '5'], image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Adidas Kids Boost', type: 'Shoes', category: 'children', price: 2699, countInStock: 12, description: 'Adidas boost shoes for children', sizes: ['1', '2', '3', '4', '5'], image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1200&q=80' },

  // ============= CLOTHING =============
  // Men's Clothing
  { name: 'Black Hoodie', type: 'Clothing', category: 'men', price: 1999, countInStock: 12, description: 'Warm black hoodie for winter', sizes: ['S', 'M', 'L', 'XL'], image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Denim Jacket', type: 'Clothing', category: 'men', price: 2999, countInStock: 6, description: 'Stylish denim jacket for all seasons', sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Blue Jeans', type: 'Clothing', category: 'men', price: 2499, countInStock: 14, description: 'Classic blue denim jeans', sizes: ['28', '30', '32', '34', '36'], image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=80' },
  { name: 'White Polo Shirt', type: 'Clothing', category: 'men', price: 1399, countInStock: 18, description: 'Classic white polo shirt', sizes: ['S', 'M', 'L', 'XL'], image: 'https://images.unsplash.com/photo-1538152191987-3f7d4534fbba?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Grey Sweatshirt', type: 'Clothing', category: 'men', price: 1799, countInStock: 10, description: 'Comfortable grey sweatshirt', sizes: ['S', 'M', 'L', 'XL'], image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Black T-Shirt', type: 'Clothing', category: 'men', price: 899, countInStock: 20, description: 'Plain black t-shirt', sizes: ['S', 'M', 'L', 'XL'], image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80' },

  // Women's Clothing
  { name: 'White T-Shirt', type: 'Clothing', category: 'women', price: 999, countInStock: 15, description: 'Comfortable white t-shirt', sizes: ['XS', 'S', 'M', 'L', 'XL'], image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Pink Hoodie', type: 'Clothing', category: 'women', price: 2199, countInStock: 8, description: 'Stylish pink hoodie', sizes: ['XS', 'S', 'M', 'L'], image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Yoga Pants', type: 'Clothing', category: 'women', price: 2799, countInStock: 11, description: 'Comfortable yoga pants', sizes: ['XS', 'S', 'M', 'L', 'XL'], image: 'https://images.unsplash.com/photo-1506629082632-11c53be61b21?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Denim Shorts', type: 'Clothing', category: 'women', price: 1799, countInStock: 9, description: 'Trendy denim shorts', sizes: ['XS', 'S', 'M', 'L'], image: 'https://images.unsplash.com/photo-1456456634652-16c16f8d7d11?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Leather Jacket', type: 'Clothing', category: 'women', price: 4999, countInStock: 5, description: 'Premium leather jacket', sizes: ['XS', 'S', 'M', 'L'], image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Summer Dress', type: 'Clothing', category: 'women', price: 1899, countInStock: 13, description: 'Light summer dress', sizes: ['XS', 'S', 'M', 'L', 'XL'], image: 'https://images.unsplash.com/photo-1595777707802-21b287910b75?auto=format&fit=crop&w=1200&q=80' },

  // Kids' Clothing
  { name: 'Kids T-Shirt', type: 'Clothing', category: 'children', price: 599, countInStock: 25, description: 'Colorful kids t-shirt', sizes: ['2', '3', '4', '5', '6'], image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Kids Hoodie', type: 'Clothing', category: 'children', price: 1399, countInStock: 16, description: 'Warm kids hoodie', sizes: ['2', '3', '4', '5', '6'], image: 'https://images.unsplash.com/photo-1519238359922-989348752efb?auto=format&fit=crop&w=1200&q=80' },

  // ============= ACCESSORIES =============
  // Men's Accessories
  { name: 'Travel Bag', type: 'Accessories', category: 'men', price: 2499, countInStock: 5, description: 'Premium travel bag', sizes: ['One Size'], image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Black Cap', type: 'Accessories', category: 'men', price: 799, countInStock: 20, description: 'Stylish black cap', sizes: ['One Size'], image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Leather Belt', type: 'Accessories', category: 'men', price: 1299, countInStock: 15, description: 'Classic leather belt', sizes: ['One Size'], image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Backpack', type: 'Accessories', category: 'men', price: 1999, countInStock: 12, description: 'Durable backpack for travel', sizes: ['One Size'], image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80' },
  
  // Women's Accessories
  { name: 'Luxury Watch', type: 'Accessories', category: 'women', price: 4999, countInStock: 4, description: 'Elegant luxury watch', sizes: ['One Size'], image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Sunglasses', type: 'Accessories', category: 'women', price: 1499, countInStock: 13, description: 'Stylish sunglasses', sizes: ['One Size'], image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Handbag', type: 'Accessories', category: 'women', price: 3299, countInStock: 8, description: 'Elegant leather handbag', sizes: ['One Size'], image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Scarf', type: 'Accessories', category: 'women', price: 999, countInStock: 18, description: 'Soft silk scarf', sizes: ['One Size'], image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Pearl Necklace', type: 'Accessories', category: 'women', price: 2499, countInStock: 6, description: 'Classic pearl necklace', sizes: ['One Size'], image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80' },

  // Kids' Accessories
  { name: 'Kids Backpack', type: 'Accessories', category: 'children', price: 899, countInStock: 20, description: 'Colorful kids backpack', sizes: ['One Size'], image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Kids Cap', type: 'Accessories', category: 'children', price: 499, countInStock: 22, description: 'Fun kids baseball cap', sizes: ['One Size'], image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1200&q=80' },
];

const seedDB = async () => {
  try {
    await connectDB();

    await Product.deleteMany();

    await Product.insertMany(allProducts);

    console.log(`🔥 ${allProducts.length} PRODUCTS INSERTED`);

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();