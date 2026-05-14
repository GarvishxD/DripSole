/**
 * Apparel — image matches garment type (tee, shirt, jacket, dress, jeans, etc.).
 */
const img = (slug) =>
  `https://images.unsplash.com/${slug}?auto=format&fit=crop&w=900&q=82`;

module.exports = [
  {
    name: 'Oversized Graphic T-Shirt Black',
    price: 2499,
    image: img('photo-1521572163474-6864f9cf17ab'),
    description: 'Streetwear oversized tee',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    type: 'Clothing'
  },
  {
    name: 'Slim Fit Formal Shirt White',
    price: 3999,
    image: img('photo-1602810318383-e386cc2a3ccf'),
    description: 'Crisp office shirt',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    type: 'Clothing'
  },
  {
    name: 'Denim Jacket Vintage Blue',
    price: 6999,
    image: img('photo-1576995975888-9eee44992f8f'),
    description: 'Classic blue denim jacket',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    type: 'Clothing'
  },
  {
    name: 'Cargo Pants Olive Green',
    price: 5499,
    image: img('photo-1473966968600-fa801b869a1a'),
    description: 'Utility cargo pockets',
    category: 'men',
    sizes: ['30', '32', '34', '36'],
    type: 'Clothing'
  },
  {
    name: 'Merino Wool Sweater',
    price: 4599,
    image: img('photo-1434389677669-e08b4cac3105'),
    description: 'Knit crewneck sweater',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    type: 'Clothing'
  },
  {
    name: 'Floral Summer Dress',
    price: 5999,
    image: img('photo-1515372039744-b8f02a3ae446'),
    description: 'Lightweight floral midi dress',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    type: 'Clothing'
  },
  {
    name: 'High Waist Skinny Jeans',
    price: 4999,
    image: img('photo-1541840031508-326b77c9a17e'),
    description: 'Stretch skinny denim',
    category: 'women',
    sizes: ['26', '28', '30', '32'],
    type: 'Clothing'
  },
  {
    name: 'Crop Top Ribbed White',
    price: 1999,
    image: img('photo-1564257577407-bb021ad652e6'),
    description: 'Ribbed fitted crop',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    type: 'Clothing'
  },
  {
    name: 'Blazer Formal Beige',
    price: 8999,
    image: img('photo-1594633312681-425c7b97ccd1'),
    description: 'Structured tailored blazer',
    category: 'women',
    sizes: ['S', 'M', 'L'],
    type: 'Clothing'
  },
  {
    name: 'Pleated Midi Skirt',
    price: 3799,
    image: img('photo-1594633313593-bab3825d0caf'),
    description: 'Flow pleated skirt',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    type: 'Clothing'
  },
  {
    name: 'Kids Printed T-Shirt',
    price: 1499,
    image: img('photo-1503944168657-c1b2a78587bc'),
    description: 'Soft cotton kids tee',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y'],
    type: 'Clothing'
  },
  {
    name: 'Kids Hoodie Cartoon',
    price: 2499,
    image: img('photo-1556821840-3a63f95609a7'),
    description: 'Cozy fleece hoodie',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y'],
    type: 'Clothing'
  },
  {
    name: 'Linen Summer Shirt',
    price: 3299,
    image: img('photo-1596755094514-f87e34085b87'),
    description: 'Breathable linen button-up',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    type: 'Clothing'
  },
  {
    name: 'Athletic Joggers Grey',
    price: 2899,
    image: img('photo-1518611012118-696072aa579a'),
    description: 'Tapered sweat joggers',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    type: 'Clothing'
  },
  {
    name: 'Leather Biker Jacket',
    price: 12999,
    image: img('photo-1551028719-00167b16eac5'),
    description: 'Black leather moto jacket',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    type: 'Clothing'
  },
  {
    name: 'Chino Shorts Khaki',
    price: 2199,
    image: img('photo-1591195853828-11ad59efd69f'),
    description: 'Tailored summer shorts',
    category: 'men',
    sizes: ['30', '32', '34', '36'],
    type: 'Clothing'
  },
  {
    name: 'Silk Blouse Ivory',
    price: 4599,
    image: img('photo-1564584217137-277f84789684'),
    description: 'Fluid silk office blouse',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    type: 'Clothing'
  },
  {
    name: 'Cable Knit Cardigan',
    price: 5299,
    image: img('photo-1576566588028-4147f3842f27'),
    description: 'Chunky cable knit layer',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    type: 'Clothing'
  },
  {
    name: 'Wide Leg Trousers Black',
    price: 4199,
    image: img('photo-1594938298603-c8148c8dae94'),
    description: 'High-rise wide leg pants',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    type: 'Clothing'
  },
  {
    name: 'Sports Leggings',
    price: 2499,
    image: img('photo-1544717297-f95a6c51ed46'),
    description: 'Performance stretch leggings',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    type: 'Clothing'
  },
  {
    name: 'Rain Parka Olive',
    price: 7499,
    image: img('photo-1539533018447-63fcce2678e3'),
    description: 'Water-resistant hooded parka',
    category: 'women',
    sizes: ['S', 'M', 'L'],
    type: 'Clothing'
  },
  {
    name: 'Kids Denim Overalls',
    price: 2799,
    image: img('photo-1503919008464-12f8de20ed73'),
    description: 'Play-ready denim overalls',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y'],
    type: 'Clothing'
  },
  {
    name: 'Kids Rain Jacket Yellow',
    price: 1999,
    image: img('photo-1519238263499-e7cd49f77aa6'),
    description: 'Bright waterproof jacket',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y'],
    type: 'Clothing'
  },
  {
    name: 'Polo Shirt Navy',
    price: 2699,
    image: img('photo-1586790170083-2f9ceadc732d'),
    description: 'Pique cotton polo',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    type: 'Clothing'
  },
  {
    name: 'Henley Long Sleeve',
    price: 2399,
    image: img('photo-1617127365659-c47fa864d8bc'),
    description: 'Thermal henley base layer',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    type: 'Clothing'
  },
  {
    name: 'Down Puffer Vest',
    price: 6299,
    image: img('photo-1544022613-e87ca75a084a'),
    description: 'Lightweight insulated vest',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    type: 'Clothing'
  },
  {
    name: 'Wrap Dress Burgundy',
    price: 6799,
    image: img('photo-1496747611176-843222e1e57c'),
    description: 'Elegant wrap silhouette',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    type: 'Clothing'
  },
  {
    name: 'Tank Top Ribbed',
    price: 1299,
    image: img('photo-1588117260148-b47818741c74'),
    description: 'Essential ribbed tank',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    type: 'Clothing'
  },
  {
    name: 'Boyfriend Jeans Light Wash',
    price: 5299,
    image: img('photo-1541099649105-f69ad21f3246'),
    description: 'Relaxed straight denim',
    category: 'women',
    sizes: ['26', '28', '30', '32'],
    type: 'Clothing'
  },
  {
    name: 'Trench Coat Camel',
    price: 9999,
    image: img('photo-1591047139829-d91aecb6caea'),
    description: 'Classic double-breast trench',
    category: 'women',
    sizes: ['S', 'M', 'L'],
    type: 'Clothing'
  },
  {
    name: 'Kids Flannel Shirt',
    price: 1799,
    image: img('photo-1620799140408-f4a421a6d654'),
    description: 'Soft plaid flannel',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y'],
    type: 'Clothing'
  },
  {
    name: 'Kids Athletic Shorts',
    price: 1199,
    image: img('photo-1571019613454-4cb846978793'),
    description: 'Mesh-lined sport shorts',
    category: 'children',
    sizes: ['2-3Y', '4-5Y', '6-7Y'],
    type: 'Clothing'
  },
  {
    name: 'Oxford Shirt Blue Stripe',
    price: 3499,
    image: img('photo-1603252109303-2751441dd157'),
    description: 'Business casual oxford',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    type: 'Clothing'
  },
  {
    name: 'Sherpa Zip Jacket',
    price: 5599,
    image: img('photo-1558171813-4c088753af8f'),
    description: 'Warm fleece sherpa',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    type: 'Clothing'
  },
  {
    name: 'Midi Slip Dress Satin',
    price: 5899,
    image: img('photo-1595777457583-95e059d581b8'),
    description: 'Evening satin slip',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    type: 'Clothing'
  },
];
