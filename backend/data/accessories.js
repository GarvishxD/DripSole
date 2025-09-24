const accessories = [
  // MEN'S ACCESSORIES (15 products)
  { 
    _id: 'a1', 
    name: 'Leather Wallet Classic Black', 
    price: 3999, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center', 
    description: 'Premium genuine leather wallet with RFID protection',
    category: 'men',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Wallets'
  },
  { 
    _id: 'a2', 
    name: 'Luxury Watch Silver Steel', 
    price: 25999, 
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center', 
    description: 'Stainless steel luxury watch with precision movement',
    category: 'men',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Watches'
  },
  { 
    _id: 'a3', 
    name: 'Designer Sunglasses Black', 
    price: 8999, 
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center', 
    description: 'UV protection designer sunglasses with premium frame',
    category: 'men',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Sunglasses'
  },
  { 
    _id: 'a4', 
    name: 'Leather Belt Premium Brown', 
    price: 2999, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center', 
    description: 'Handcrafted brown leather belt with metal buckle',
    category: 'men',
    sizes: ['32', '34', '36', '38', '40'],
    type: 'accessories',
    subCategory: 'Belts'
  },
  { 
    _id: 'a5', 
    name: 'Business Briefcase Black', 
    price: 15999, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center', 
    description: 'Professional black leather briefcase for business',
    category: 'men',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Bags'
  },
  { 
    _id: 'a6', 
    name: 'Silk Tie Navy Blue', 
    price: 1999, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center', 
    description: '100% silk navy blue tie for formal occasions',
    category: 'men',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Ties'
  },
  { 
    _id: 'a7', 
    name: 'Cufflinks Gold Plated', 
    price: 4999, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center', 
    description: 'Elegant gold-plated cufflinks for dress shirts',
    category: 'men',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Cufflinks'
  },
  { 
    _id: 'a8', 
    name: 'Leather Backpack Vintage', 
    price: 12999, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center', 
    description: 'Vintage style leather backpack for daily use',
    category: 'men',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Backpacks'
  },
  { 
    _id: 'a9', 
    name: 'Baseball Cap Premium', 
    price: 2499, 
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop&crop=center', 
    description: 'Premium cotton baseball cap with adjustable strap',
    category: 'men',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Caps'
  },
  { 
    _id: 'a10', 
    name: 'Chain Bracelet Silver', 
    price: 6999, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center', 
    description: 'Sterling silver chain bracelet for men',
    category: 'men',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Jewelry'
  },
  { 
    _id: 'a11', 
    name: 'Pocket Watch Classic', 
    price: 18999, 
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center', 
    description: 'Vintage-style pocket watch with chain',
    category: 'men',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Watches'
  },
  { 
    _id: 'a12', 
    name: 'Gym Bag Sports Black', 
    price: 4999, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center', 
    description: 'Waterproof sports gym bag with multiple compartments',
    category: 'men',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Sports Bags'
  },
  { 
    _id: 'a13', 
    name: 'Gloves Leather Brown', 
    price: 3499, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center', 
    description: 'Genuine leather gloves for winter season',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    type: 'accessories',
    subCategory: 'Gloves'
  },
  { 
    _id: 'a14', 
    name: 'Cologne Fragrance Premium', 
    price: 7999, 
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&crop=center', 
    description: 'Long-lasting premium cologne for men',
    category: 'men',
    sizes: ['100ml'],
    type: 'accessories',
    subCategory: 'Fragrances'
  },
  { 
    _id: 'a15', 
    name: 'Phone Case Leather', 
    price: 1999, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center', 
    description: 'Premium leather phone case with card slots',
    category: 'men',
    sizes: ['iPhone', 'Samsung'],
    type: 'accessories',
    subCategory: 'Phone Cases'
  },

  // WOMEN'S ACCESSORIES (15 products)
  { 
    _id: 'a16', 
    name: 'Designer Handbag Pink', 
    price: 18999, 
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&crop=center', 
    description: 'Elegant pink designer handbag with gold hardware',
    category: 'women',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Handbags'
  },
  { 
    _id: 'a17', 
    name: 'Pearl Necklace White', 
    price: 12999, 
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center', 
    description: 'Classic white pearl necklace for special occasions',
    category: 'women',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Jewelry'
  },
  { 
    _id: 'a18', 
    name: 'Silk Scarf Floral Print', 
    price: 4999, 
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&crop=center', 
    description: 'Luxurious silk scarf with beautiful floral patterns',
    category: 'women',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Scarves'
  },
  { 
    _id: 'a19', 
    name: 'Diamond Earrings Silver', 
    price: 15999, 
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center', 
    description: 'Sterling silver earrings with diamond accents',
    category: 'women',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Earrings'
  },
  { 
    _id: 'a20', 
    name: 'Leather Purse Cream', 
    price: 8999, 
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&crop=center', 
    description: 'Cream colored leather purse with multiple compartments',
    category: 'women',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Purses'
  },
  { 
    _id: 'a21', 
    name: 'Designer Watch Rose Gold', 
    price: 22999, 
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center', 
    description: 'Elegant rose gold watch with leather strap',
    category: 'women',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Watches'
  },
  { 
    _id: 'a22', 
    name: 'Sunglasses Cat Eye', 
    price: 6999, 
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center', 
    description: 'Trendy cat-eye sunglasses with UV protection',
    category: 'women',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Sunglasses'
  },
  { 
    _id: 'a23', 
    name: 'Hair Accessories Set', 
    price: 2999, 
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&crop=center', 
    description: 'Premium hair clips, bands and accessories set',
    category: 'women',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Hair Accessories'
  },
  { 
    _id: 'a24', 
    name: 'Gold Bracelet Chain', 
    price: 14999, 
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center', 
    description: '18k gold plated chain bracelet for women',
    category: 'women',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Bracelets'
  },
  { 
    _id: 'a25', 
    name: 'Perfume Floral Essence', 
    price: 9999, 
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&crop=center', 
    description: 'Elegant floral perfume with long-lasting fragrance',
    category: 'women',
    sizes: ['50ml', '100ml'],
    type: 'accessories',
    subCategory: 'Perfumes'
  },
  { 
    _id: 'a26', 
    name: 'Evening Clutch Gold', 
    price: 7999, 
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&crop=center', 
    description: 'Glamorous gold evening clutch for parties',
    category: 'women',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Clutches'
  },
  { 
    _id: 'a27', 
    name: 'Makeup Organizer Luxury', 
    price: 5999, 
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&crop=center', 
    description: 'Premium makeup organizer with mirror and compartments',
    category: 'women',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Organizers'
  },
  { 
    _id: 'a28', 
    name: 'Phone Wallet Case Pink', 
    price: 2499, 
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&crop=center', 
    description: 'Pink phone wallet case with card and money slots',
    category: 'women',
    sizes: ['iPhone', 'Samsung'],
    type: 'accessories',
    subCategory: 'Phone Cases'
  },
  { 
    _id: 'a29', 
    name: 'Travel Cosmetic Bag', 
    price: 3999, 
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&crop=center', 
    description: 'Waterproof travel cosmetic bag with multiple pockets',
    category: 'women',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Travel Bags'
  },
  { 
    _id: 'a30', 
    name: 'Fashion Ring Set', 
    price: 4999, 
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center', 
    description: 'Set of 5 trendy fashion rings in different styles',
    category: 'women',
    sizes: ['6', '7', '8', '9'],
    type: 'accessories',
    subCategory: 'Rings'
  },

  // CHILDREN'S ACCESSORIES (10 products)
  { 
    _id: 'a31', 
    name: 'Kids Backpack Unicorn', 
    price: 2999, 
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center', 
    description: 'Colorful unicorn backpack perfect for school',
    category: 'children',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Backpacks'
  },
  { 
    _id: 'a32', 
    name: 'Cartoon Watch Digital', 
    price: 1999, 
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center', 
    description: 'Fun digital watch with cartoon characters',
    category: 'children',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Watches'
  },
  { 
    _id: 'a33', 
    name: 'Kids Sunglasses Colorful', 
    price: 1499, 
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center', 
    description: 'UV protection sunglasses in bright colors for kids',
    category: 'children',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Sunglasses'
  },
  { 
    _id: 'a34', 
    name: 'Hair Bow Set Princess', 
    price: 999, 
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center', 
    description: 'Set of 10 princess-themed hair bows for girls',
    category: 'children',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Hair Accessories'
  },
  { 
    _id: 'a35', 
    name: 'School Lunch Box Hero', 
    price: 1499, 
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center', 
    description: 'Superhero themed lunch box with compartments',
    category: 'children',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Lunch Boxes'
  },
  { 
    _id: 'a36', 
    name: 'Kids Baseball Cap Rainbow', 
    price: 899, 
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop&crop=center', 
    description: 'Colorful rainbow baseball cap for children',
    category: 'children',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Caps'
  },
  { 
    _id: 'a37', 
    name: 'Friendship Bracelet Kit', 
    price: 1299, 
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center', 
    description: 'DIY friendship bracelet making kit with colorful beads',
    category: 'children',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Craft Kits'
  },
  { 
    _id: 'a38', 
    name: 'Water Bottle Sports', 
    price: 799, 
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center', 
    description: 'BPA-free sports water bottle with fun designs',
    category: 'children',
    sizes: ['500ml'],
    type: 'accessories',
    subCategory: 'Water Bottles'
  },
  { 
    _id: 'a39', 
    name: 'Kids Wallet Cartoon', 
    price: 699, 
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center', 
    description: 'Small wallet with favorite cartoon characters',
    category: 'children',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Wallets'
  },
  { 
    _id: 'a40', 
    name: 'School Badge Set', 
    price: 499, 
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center', 
    description: 'Set of achievement badges for school backpacks',
    category: 'children',
    sizes: ['One Size'],
    type: 'accessories',
    subCategory: 'Badges'
  }
];

module.exports = accessories;
