const clothing = [
  // MEN'S CLOTHING (15 products)
  { 
    _id: 'c1', 
    name: 'Premium Cotton T-Shirt White', 
    price: 2499, 
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center', 
    description: 'Classic white cotton t-shirt with premium fabric blend',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    type: 'clothing',
    subCategory: 'T-Shirts'
  },
  { 
    _id: 'c2', 
    name: 'Denim Jacket Classic Blue', 
    price: 6999, 
    image: 'https://images.unsplash.com/photo-1544966503-1f55b6f7b5cc?w=400&h=400&fit=crop&crop=center', 
    description: 'Classic blue denim jacket with modern fit',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    type: 'clothing',
    subCategory: 'Jackets'
  },
  { 
    _id: 'c3', 
    name: 'Formal Shirt Navy', 
    price: 3999, 
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&crop=center', 
    description: 'Professional navy formal shirt for business wear',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    type: 'clothing',
    subCategory: 'Shirts'
  },
  { 
    _id: 'c4', 
    name: 'Casual Chinos Khaki', 
    price: 4499, 
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop&crop=center', 
    description: 'Comfortable khaki chinos for casual wear',
    category: 'men',
    sizes: ['30', '32', '34', '36', '38'],
    type: 'clothing',
    subCategory: 'Pants'
  },
  { 
    _id: 'c5', 
    name: 'Hoodie Charcoal Grey', 
    price: 5499, 
    image: 'https://images.unsplash.com/photo-1556821840-3a9ca9579702?w=400&h=400&fit=crop&crop=center', 
    description: 'Cozy charcoal grey hoodie with premium cotton blend',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    type: 'clothing',
    subCategory: 'Hoodies'
  },
  { 
    _id: 'c6', 
    name: 'Polo Shirt Black', 
    price: 3499, 
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop&crop=center', 
    description: 'Classic black polo shirt with collar design',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    type: 'clothing',
    subCategory: 'Polo'
  },
  { 
    _id: 'c7', 
    name: 'Jeans Slim Fit Dark', 
    price: 5999, 
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center', 
    description: 'Slim fit dark wash jeans with modern styling',
    category: 'men',
    sizes: ['30', '32', '34', '36', '38'],
    type: 'clothing',
    subCategory: 'Jeans'
  },
  { 
    _id: 'c8', 
    name: 'Blazer Formal Black', 
    price: 12999, 
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop&crop=center', 
    description: 'Premium black formal blazer for special occasions',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    type: 'clothing',
    subCategory: 'Blazers'
  },
  { 
    _id: 'c9', 
    name: 'Sports Track Suit', 
    price: 7999, 
    image: 'https://images.unsplash.com/photo-1506629905607-64b10051407e?w=400&h=400&fit=crop&crop=center', 
    description: 'Complete sports track suit for athletic activities',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    type: 'clothing',
    subCategory: 'Sports'
  },
  { 
    _id: 'c10', 
    name: 'Sweater Cable Knit', 
    price: 6499, 
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&crop=center', 
    description: 'Warm cable knit sweater for winter season',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    type: 'clothing',
    subCategory: 'Sweaters'
  },
  { 
    _id: 'c11', 
    name: 'Shorts Summer Cotton', 
    price: 2999, 
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop&crop=center', 
    description: 'Comfortable cotton shorts perfect for summer',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    type: 'clothing',
    subCategory: 'Shorts'
  },
  { 
    _id: 'c12', 
    name: 'Leather Jacket Brown', 
    price: 15999, 
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center', 
    description: 'Genuine brown leather jacket with vintage style',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    type: 'clothing',
    subCategory: 'Jackets'
  },
  { 
    _id: 'c13', 
    name: 'Linen Shirt White', 
    price: 4999, 
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop&crop=center', 
    description: 'Breathable white linen shirt for summer comfort',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    type: 'clothing',
    subCategory: 'Shirts'
  },
  { 
    _id: 'c14', 
    name: 'Cardigan Wool Grey', 
    price: 7499, 
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&crop=center', 
    description: 'Elegant grey wool cardigan with button closure',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    type: 'clothing',
    subCategory: 'Cardigans'
  },
  { 
    _id: 'c15', 
    name: 'Tank Top Athletic', 
    price: 1999, 
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop&crop=center', 
    description: 'Athletic tank top for gym and sports activities',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    type: 'clothing',
    subCategory: 'Tank Tops'
  },

  // WOMEN'S CLOTHING (15 products)
  { 
    _id: 'c16', 
    name: 'Elegant Blouse Pink', 
    price: 3999, 
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center', 
    description: 'Elegant pink blouse perfect for professional wear',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    type: 'clothing',
    subCategory: 'Blouses'
  },
  { 
    _id: 'c17', 
    name: 'Maxi Dress Floral', 
    price: 6999, 
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&crop=center', 
    description: 'Beautiful floral maxi dress for special occasions',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    type: 'clothing',
    subCategory: 'Dresses'
  },
  { 
    _id: 'c18', 
    name: 'Skinny Jeans Blue', 
    price: 4999, 
    image: 'https://images.unsplash.com/photo-1541840031508-326b77c9a17e?w=400&h=400&fit=crop&crop=center', 
    description: 'Comfortable blue skinny jeans with stretch fabric',
    category: 'women',
    sizes: ['26', '28', '30', '32', '34'],
    type: 'clothing',
    subCategory: 'Jeans'
  },
  { 
    _id: 'c19', 
    name: 'Cardigan Soft Pink', 
    price: 5499, 
    image: 'https://images.unsplash.com/photo-1544441893-675973e4b0a8?w=400&h=400&fit=crop&crop=center', 
    description: 'Soft pink cardigan with delicate knit pattern',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    type: 'clothing',
    subCategory: 'Cardigans'
  },
  { 
    _id: 'c20', 
    name: 'Silk Scarf Elegant', 
    price: 2999, 
    image: 'https://images.unsplash.com/photo-1544441893-675973e4b0a8?w=400&h=400&fit=crop&crop=center', 
    description: 'Luxurious silk scarf with elegant patterns',
    category: 'women',
    sizes: ['One Size'],
    type: 'clothing',
    subCategory: 'Accessories'
  },
  { 
    _id: 'c21', 
    name: 'Blazer Professional Navy', 
    price: 8999, 
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center', 
    description: 'Professional navy blazer for business meetings',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    type: 'clothing',
    subCategory: 'Blazers'
  },
  { 
    _id: 'c22', 
    name: 'Summer Top White', 
    price: 2499, 
    image: 'https://images.unsplash.com/photo-1564257577407-bb021ad652e6?w=400&h=400&fit=crop&crop=center', 
    description: 'Light white summer top with breathable fabric',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    type: 'clothing',
    subCategory: 'Tops'
  },
  { 
    _id: 'c23', 
    name: 'Pencil Skirt Black', 
    price: 3999, 
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center', 
    description: 'Classic black pencil skirt for professional look',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    type: 'clothing',
    subCategory: 'Skirts'
  },
  { 
    _id: 'c24', 
    name: 'Cocktail Dress Red', 
    price: 9999, 
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&crop=center', 
    description: 'Stunning red cocktail dress for evening events',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    type: 'clothing',
    subCategory: 'Dresses'
  },
  { 
    _id: 'c25', 
    name: 'Cashmere Sweater Beige', 
    price: 12999, 
    image: 'https://images.unsplash.com/photo-1544441893-675973e4b0a8?w=400&h=400&fit=crop&crop=center', 
    description: 'Luxurious beige cashmere sweater for winter',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    type: 'clothing',
    subCategory: 'Sweaters'
  },
  { 
    _id: 'c26', 
    name: 'Yoga Pants Black', 
    price: 3499, 
    image: 'https://images.unsplash.com/photo-1506629905607-64b10051407e?w=400&h=400&fit=crop&crop=center', 
    description: 'Comfortable black yoga pants with stretch fabric',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    type: 'clothing',
    subCategory: 'Activewear'
  },
  { 
    _id: 'c27', 
    name: 'Trench Coat Beige', 
    price: 14999, 
    image: 'https://images.unsplash.com/photo-1544966503-1f55b6f7b5cc?w=400&h=400&fit=crop&crop=center', 
    description: 'Classic beige trench coat with timeless style',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    type: 'clothing',
    subCategory: 'Coats'
  },
  { 
    _id: 'c28', 
    name: 'Crop Top Striped', 
    price: 1999, 
    image: 'https://images.unsplash.com/photo-1564257577407-bb021ad652e6?w=400&h=400&fit=crop&crop=center', 
    description: 'Trendy striped crop top for casual wear',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    type: 'clothing',
    subCategory: 'Crop Tops'
  },
  { 
    _id: 'c29', 
    name: 'Wide Leg Pants Cream', 
    price: 5999, 
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop&crop=center', 
    description: 'Elegant cream wide leg pants for formal occasions',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    type: 'clothing',
    subCategory: 'Pants'
  },
  { 
    _id: 'c30', 
    name: 'Denim Jacket Light Blue', 
    price: 5999, 
    image: 'https://images.unsplash.com/photo-1544966503-1f55b6f7b5cc?w=400&h=400&fit=crop&crop=center', 
    description: 'Light blue denim jacket with vintage wash',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    type: 'clothing',
    subCategory: 'Jackets'
  },

  // CHILDREN'S CLOTHING (10 products)
  { 
    _id: 'c31', 
    name: 'Kids T-Shirt Rainbow', 
    price: 1499, 
    image: 'https://images.unsplash.com/photo-1503944168657-c1b2a78587bc?w=400&h=400&fit=crop&crop=center', 
    description: 'Colorful rainbow t-shirt perfect for active kids',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    type: 'clothing',
    subCategory: 'T-Shirts'
  },
  { 
    _id: 'c32', 
    name: 'Kids Hoodie Blue', 
    price: 2999, 
    image: 'https://images.unsplash.com/photo-1503944168657-c1b2a78587bc?w=400&h=400&fit=crop&crop=center', 
    description: 'Cozy blue hoodie with fun cartoon characters',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    type: 'clothing',
    subCategory: 'Hoodies'
  },
  { 
    _id: 'c33', 
    name: 'Kids Jeans Dark Blue', 
    price: 2499, 
    image: 'https://images.unsplash.com/photo-1503944168657-c1b2a78587bc?w=400&h=400&fit=crop&crop=center', 
    description: 'Durable dark blue jeans for everyday play',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    type: 'clothing',
    subCategory: 'Jeans'
  },
  { 
    _id: 'c34', 
    name: 'Princess Dress Pink', 
    price: 3499, 
    image: 'https://images.unsplash.com/photo-1503944168657-c1b2a78587bc?w=400&h=400&fit=crop&crop=center', 
    description: 'Beautiful pink princess dress for special occasions',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    type: 'clothing',
    subCategory: 'Dresses'
  },
  { 
    _id: 'c35', 
    name: 'Sports Shorts Green', 
    price: 1299, 
    image: 'https://images.unsplash.com/photo-1503944168657-c1b2a78587bc?w=400&h=400&fit=crop&crop=center', 
    description: 'Comfortable green sports shorts for active play',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    type: 'clothing',
    subCategory: 'Shorts'
  },
  { 
    _id: 'c36', 
    name: 'School Uniform Shirt', 
    price: 1999, 
    image: 'https://images.unsplash.com/photo-1503944168657-c1b2a78587bc?w=400&h=400&fit=crop&crop=center', 
    description: 'Clean white school uniform shirt',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    type: 'clothing',
    subCategory: 'Uniforms'
  },
  { 
    _id: 'c37', 
    name: 'Winter Jacket Red', 
    price: 4999, 
    image: 'https://images.unsplash.com/photo-1503944168657-c1b2a78587bc?w=400&h=400&fit=crop&crop=center', 
    description: 'Warm red winter jacket with hood',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    type: 'clothing',
    subCategory: 'Jackets'
  },
  { 
    _id: 'c38', 
    name: 'Cartoon Pajama Set', 
    price: 2299, 
    image: 'https://images.unsplash.com/photo-1503944168657-c1b2a78587bc?w=400&h=400&fit=crop&crop=center', 
    description: 'Cute cartoon character pajama set for bedtime',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    type: 'clothing',
    subCategory: 'Pajamas'
  },
  { 
    _id: 'c39', 
    name: 'Summer Romper Yellow', 
    price: 1799, 
    image: 'https://images.unsplash.com/photo-1503944168657-c1b2a78587bc?w=400&h=400&fit=crop&crop=center', 
    description: 'Bright yellow summer romper for little ones',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    type: 'clothing',
    subCategory: 'Rompers'
  },
  { 
    _id: 'c40', 
    name: 'Kids Sweater Navy', 
    price: 2999, 
    image: 'https://images.unsplash.com/photo-1503944168657-c1b2a78587bc?w=400&h=400&fit=crop&crop=center', 
    description: 'Cozy navy sweater for cooler weather',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    type: 'clothing',
    subCategory: 'Sweaters'
  }
];

module.exports = clothing;
