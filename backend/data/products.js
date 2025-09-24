const products = [
  // MEN'S SHOES (10 products)
  { 
    _id: '1', 
    name: 'Nike Air Max 270 Black', 
    price: 12999, 
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center', 
    description: 'Premium Nike Air Max 270 with exceptional comfort and style',
    category: 'men',
    sizes: ['7', '8', '9', '10', '11'],
    type: 'shoes',
    subCategory: 'Sports'
  },
  { 
    _id: '2', 
    name: 'Adidas UltraBoost 22 White', 
    price: 15999, 
    image: 'https://images.unsplash.com/photo-1544966503-1f55b6f7b5cc?w=400&h=400&fit=crop&crop=center', 
    description: 'Revolutionary UltraBoost technology for maximum energy return',
    category: 'men',
    sizes: ['7', '8', '9', '10', '11', '12'],
    type: 'shoes',
    subCategory: 'Running'
  },
  { 
    _id: '3', 
    name: 'Jordan 1 Retro High OG', 
    price: 18999, 
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop&crop=center', 
    description: 'Iconic Jordan 1 design with premium leather construction',
    category: 'men',
    sizes: ['7', '8', '9', '10', '11'],
    type: 'shoes',
    subCategory: 'Basketball'
  },
  { 
    _id: '4', 
    name: 'Converse Chuck Taylor Classic', 
    price: 4999, 
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop&crop=center', 
    description: 'Timeless Chuck Taylor All Star in classic black',
    category: 'men',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    type: 'shoes',
    subCategory: 'Casual'
  },
  { 
    _id: '5', 
    name: 'Vans Old Skool Checkerboard', 
    price: 6999, 
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop&crop=center', 
    description: 'Classic Vans Old Skool with iconic checkerboard pattern',
    category: 'men',
    sizes: ['7', '8', '9', '10', '11'],
    type: 'shoes',
    subCategory: 'Skate'
  },
  { 
    _id: '6', 
    name: 'New Balance 990v5 Grey', 
    price: 14999, 
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center', 
    description: 'Premium New Balance 990v5 with superior comfort',
    category: 'men',
    sizes: ['7', '8', '9', '10', '11', '12'],
    type: 'shoes',
    subCategory: 'Running'
  },
  { 
    _id: '7', 
    name: 'Puma RS-X Bold', 
    price: 8999, 
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop&crop=center', 
    description: 'Bold and chunky RS-X with retro-futuristic design',
    category: 'men',
    sizes: ['7', '8', '9', '10', '11'],
    type: 'shoes',
    subCategory: 'Lifestyle'
  },
  { 
    _id: '8', 
    name: 'Reebok Classic Leather', 
    price: 5999, 
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=400&h=400&fit=crop&crop=center', 
    description: 'Timeless Reebok Classic Leather in pristine white',
    category: 'men',
    sizes: ['6', '7', '8', '9', '10', '11'],
    type: 'shoes',
    subCategory: 'Casual'
  },
  { 
    _id: '9', 
    name: 'Asics Gel-Kayano 29', 
    price: 13999, 
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center', 
    description: 'Advanced Gel-Kayano technology for serious runners',
    category: 'men',
    sizes: ['7', '8', '9', '10', '11', '12'],
    type: 'shoes',
    subCategory: 'Running'
  },
  { 
    _id: '10', 
    name: 'Timberland 6-Inch Premium', 
    price: 16999, 
    image: 'https://images.unsplash.com/photo-1544966503-1f55b6f7b5cc?w=400&h=400&fit=crop&crop=center', 
    description: 'Iconic Timberland boots with premium nubuck leather',
    category: 'men',
    sizes: ['7', '8', '9', '10', '11', '12'],
    type: 'shoes',
    subCategory: 'Boots'
  },

  // WOMEN'S SHOES (15 products)
  { 
    _id: '11', 
    name: 'Nike Air Force 1 White', 
    price: 9999, 
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center', 
    description: 'Classic Nike Air Force 1 in timeless white leather',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9', '10'],
    type: 'shoes',
    subCategory: 'Casual'
  },
  { 
    _id: '12', 
    name: 'Adidas Stan Smith Green', 
    price: 7999, 
    image: 'https://images.unsplash.com/photo-1544966503-1f55b6f7b5cc?w=400&h=400&fit=crop&crop=center', 
    description: 'Iconic Stan Smith with classic green accents',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9'],
    type: 'shoes',
    subCategory: 'Casual'
  },
  { 
    _id: '13', 
    name: 'Jordan 1 Low Pink', 
    price: 11999, 
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop&crop=center', 
    description: 'Feminine Jordan 1 Low in beautiful pink colorway',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9'],
    type: 'shoes',
    subCategory: 'Lifestyle'
  },
  { 
    _id: '14', 
    name: 'Converse High Top Pink', 
    price: 5499, 
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop&crop=center', 
    description: 'Classic Chuck Taylor High Top in soft pink',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9', '10'],
    type: 'shoes',
    subCategory: 'Casual'
  },
  { 
    _id: '15', 
    name: 'Vans Slip-On Checkerboard', 
    price: 5999, 
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop&crop=center', 
    description: 'Easy slip-on Vans with iconic checkerboard pattern',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9'],
    type: 'shoes',
    subCategory: 'Slip-On'
  },
  { 
    _id: '16', 
    name: 'Nike Dunk Low Panda', 
    price: 10999, 
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center', 
    description: 'Popular Nike Dunk Low in black and white panda colorway',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9'],
    type: 'shoes',
    subCategory: 'Lifestyle'
  },
  { 
    _id: '17', 
    name: 'New Balance 550 White', 
    price: 12999, 
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center', 
    description: 'Retro New Balance 550 with premium materials',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9'],
    type: 'shoes',
    subCategory: 'Retro'
  },
  { 
    _id: '18', 
    name: 'Puma Cali Bold', 
    price: 7499, 
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop&crop=center', 
    description: 'California-inspired Puma Cali with bold design',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9'],
    type: 'shoes',
    subCategory: 'Lifestyle'
  },
  { 
    _id: '19', 
    name: 'Reebok Club C 85', 
    price: 6999, 
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=400&h=400&fit=crop&crop=center', 
    description: 'Classic tennis-inspired Reebok Club C 85',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9'],
    type: 'shoes',
    subCategory: 'Tennis'
  },
  { 
    _id: '20', 
    name: 'Asics Gel-Quantum 180', 
    price: 11999, 
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center', 
    description: 'Modern running shoe with Gel technology',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9'],
    type: 'shoes',
    subCategory: 'Running'
  },
  { 
    _id: '21', 
    name: 'Dr. Martens 1460 Black', 
    price: 17999, 
    image: 'https://images.unsplash.com/photo-1544966503-1f55b6f7b5cc?w=400&h=400&fit=crop&crop=center', 
    description: 'Iconic Dr. Martens 1460 boots in classic black',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9'],
    type: 'shoes',
    subCategory: 'Boots'
  },
  { 
    _id: '22', 
    name: 'Fila Disruptor White', 
    price: 8999, 
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center', 
    description: 'Chunky Fila Disruptor in pristine white',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9'],
    type: 'shoes',
    subCategory: 'Chunky'
  },
  { 
    _id: '23', 
    name: 'Golden Goose Superstar', 
    price: 45999, 
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=400&h=400&fit=crop&crop=center', 
    description: 'Luxury Golden Goose Superstar with distressed finish',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9'],
    type: 'shoes',
    subCategory: 'Luxury'
  },
  { 
    _id: '24', 
    name: 'Balenciaga Triple S', 
    price: 89999, 
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop&crop=center', 
    description: 'High-fashion Balenciaga Triple S chunky sneaker',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9'],
    type: 'shoes',
    subCategory: 'Designer'
  },
  { 
    _id: '25', 
    name: 'UGG Classic Short', 
    price: 19999, 
    image: 'https://images.unsplash.com/photo-1544966503-1f55b6f7b5cc?w=400&h=400&fit=crop&crop=center', 
    description: 'Cozy UGG Classic Short boots in chestnut',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9'],
    type: 'shoes',
    subCategory: 'Boots'
  },

  // CHILDREN'S SHOES (10 products)
  { 
    _id: '26', 
    name: 'Nike Air Force 1 Kids', 
    price: 5999, 
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop&crop=center', 
    description: 'Classic Nike Air Force 1 sized for kids',
    category: 'children',
    sizes: ['10C', '11C', '12C', '13C', '1Y', '2Y', '3Y'],
    type: 'shoes',
    subCategory: 'Casual'
  },
  { 
    _id: '27', 
    name: 'Adidas Superstar Kids', 
    price: 4999, 
    image: 'https://images.unsplash.com/photo-1544966503-1f55b6f7b5cc?w=400&h=400&fit=crop&crop=center', 
    description: 'Iconic Adidas Superstar for children',
    category: 'children',
    sizes: ['10C', '11C', '12C', '13C', '1Y', '2Y'],
    type: 'shoes',
    subCategory: 'Casual'
  },
  { 
    _id: '28', 
    name: 'Converse Kids High Top', 
    price: 3999, 
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop&crop=center', 
    description: 'Classic Converse High Top in kids sizes',
    category: 'children',
    sizes: ['9C', '10C', '11C', '12C', '13C', '1Y'],
    type: 'shoes',
    subCategory: 'High Top'
  },
  { 
    _id: '29', 
    name: 'Vans Kids Slip-On', 
    price: 3499, 
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop&crop=center', 
    description: 'Easy slip-on Vans perfect for active kids',
    category: 'children',
    sizes: ['10C', '11C', '12C', '13C', '1Y', '2Y'],
    type: 'shoes',
    subCategory: 'Slip-On'
  },
  { 
    _id: '30', 
    name: 'New Balance 327 Kids', 
    price: 4499, 
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center', 
    description: 'Retro-inspired New Balance 327 for kids',
    category: 'children',
    sizes: ['10C', '11C', '12C', '13C', '1Y'],
    type: 'shoes',
    subCategory: 'Retro'
  },
  { 
    _id: '31', 
    name: 'Puma Suede Kids', 
    price: 3999, 
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop&crop=center', 
    description: 'Classic Puma Suede in bright kids colors',
    category: 'children',
    sizes: ['9C', '10C', '11C', '12C', '13C'],
    type: 'shoes',
    subCategory: 'Classic'
  },
  { 
    _id: '32', 
    name: 'Jordan 1 Mid Kids', 
    price: 6999, 
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop&crop=center', 
    description: 'Iconic Jordan 1 Mid in kid-friendly colorways',
    category: 'children',
    sizes: ['10C', '11C', '12C', '13C', '1Y', '2Y'],
    type: 'shoes',
    subCategory: 'Basketball'
  },
  { 
    _id: '33', 
    name: 'Reebok Classic Kids', 
    price: 3499, 
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=400&h=400&fit=crop&crop=center', 
    description: 'Simple and clean Reebok Classic for children',
    category: 'children',
    sizes: ['9C', '10C', '11C', '12C', '13C'],
    type: 'shoes',
    subCategory: 'Classic'
  },
  { 
    _id: '34', 
    name: 'Sketchers Kids Light-Up', 
    price: 4999, 
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop&crop=center', 
    description: 'Fun light-up Sketchers that kids love',
    category: 'children',
    sizes: ['8C', '9C', '10C', '11C', '12C', '13C'],
    type: 'shoes',
    subCategory: 'Light-Up'
  },
  { 
    _id: '35', 
    name: 'Crocs Classic Clog Kids', 
    price: 2999, 
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop&crop=center', 
    description: 'Comfortable Crocs Classic Clogs for everyday wear',
    category: 'children',
    sizes: ['6C', '7C', '8C', '9C', '10C', '11C', '12C'],
    type: 'shoes',
    subCategory: 'Clogs'
  }
];

module.exports = products;
