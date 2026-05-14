/**
 * 40 accessories — each image URL matches the product category (not random bags for shirts).
 */
const img = (slug) =>
  `https://images.unsplash.com/${slug}?auto=format&fit=crop&w=900&q=82`;

module.exports = [
  {
    name: 'Leather Wallet Classic Black',
    price: 3999,
    image: img('photo-1553062407-98eeb64c6a62'),
    description: 'Hand-stitched bi-fold wallet',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Luxury Watch Silver Steel',
    price: 25999,
    image: img('photo-1524592094714-0f0654e20314'),
    description: 'Brushed steel chronograph',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Designer Sunglasses Black',
    price: 8999,
    image: img('photo-1572635196237-14b3f281503f'),
    description: 'Polarised dark lenses',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Leather Belt Premium Brown',
    price: 2999,
    image: img('photo-1624227739756-1000397893792'),
    description: 'Burnished buckle belt',
    category: 'men',
    sizes: ['32', '34', '36', '38', '40'],
    type: 'Accessories'
  },
  {
    name: 'Roll-Top Backpack Waxed Canvas',
    price: 6499,
    image: img('photo-1555529627-d400acb52263'),
    description: 'Outdoor roll-top daypack',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Structured Leather Tote',
    price: 7999,
    image: img('photo-1548036328-c9fa89d128fa'),
    description: 'Carry-all leather tote',
    category: 'women',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Quilted Crossbody Bag',
    price: 5899,
    image: img('photo-1564422170194-896b34313f42'),
    description: 'Chain-strap evening bag',
    category: 'women',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Gold Hoop Earrings',
    price: 2399,
    image: img('photo-1617038260897-41a1f14a8ca0'),
    description: 'Polished medium hoops',
    category: 'women',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Printed Silk Square Scarf',
    price: 2199,
    image: img('photo-1611591437281-460bfbe1220a'),
    description: 'Silk neck scarf',
    category: 'women',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Minimal Gold Pendant Necklace',
    price: 3699,
    image: img('photo-1599643478518-a784e5dc4c8f'),
    description: 'Fine chain with pendant',
    category: 'women',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Merino Wool Beanie',
    price: 1399,
    image: img('photo-1576871337632-b9fa40704504'),
    description: 'Ribbed winter beanie',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Six-Panel Baseball Cap',
    price: 1599,
    image: img('photo-1588850561407-ed78c282e89b'),
    description: 'Adjustable cotton cap',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Leather Driving Gloves',
    price: 4499,
    image: img('photo-1578651019298-fbc46daada09'),
    description: 'Unlined leather gloves',
    category: 'men',
    sizes: ['S', 'M', 'L'],
    type: 'Accessories'
  },
  {
    name: 'Compact Travel Umbrella',
    price: 1299,
    image: img('photo-1558618666-fcd25c85cd64'),
    description: 'Wind-resistant folding umbrella',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Silk Necktie Navy',
    price: 2499,
    image: img('photo-1586790170083-2f9ceadc732d'),
    description: 'Matte silk tie',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Mother-of-Pearl Cufflinks',
    price: 3299,
    image: img('photo-1617127937979-f59cca960949'),
    description: 'Dress shirt cufflinks',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Sterling Curb Bracelet',
    price: 5199,
    image: img('photo-1611591437281-460bfbe1220a'),
    description: 'Silver-tone bracelet',
    category: 'women',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Signet Ring Matte Gold',
    price: 2899,
    image: img('photo-1515562141207-7a88fb7ce338'),
    description: 'Minimal engraved ring',
    category: 'women',
    sizes: ['6', '7', '8'],
    type: 'Accessories'
  },
  {
    name: 'Charm Anklet Silver',
    price: 1799,
    image: img('photo-1611923134239-b9be5816e23c'),
    description: 'Delicate chain anklet',
    category: 'women',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Barrette & Clip Set',
    price: 899,
    image: img('photo-1594633313593-bab3825d0caf'),
    description: 'Acetate hair clips',
    category: 'women',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Merino Dress Socks 3-Pack',
    price: 1499,
    image: img('photo-1586350976688-2fb613845892'),
    description: 'Fine gauge crew socks',
    category: 'men',
    sizes: ['M', 'L'],
    type: 'Accessories'
  },
  {
    name: 'Felt Laptop Sleeve 13"',
    price: 2799,
    image: img('photo-1625840617825-fe63233289aa'),
    description: 'Soft-touch laptop sleeve',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Insulated Steel Bottle 750ml',
    price: 1999,
    image: img('photo-1602146685888-62866354391e'),
    description: 'Double-wall drink bottle',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'RFID Passport Sleeve',
    price: 1899,
    image: img('photo-1627123425744-d5a041394053'),
    description: 'Slim travel passport cover',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Leather Luggage Tag',
    price: 999,
    image: img('photo-1593030766734-06ab71464258'),
    description: 'Embossed luggage tag',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Cotton Bandana Pack',
    price: 799,
    image: img('photo-1578662996442-48f60103fc96'),
    description: 'Vintage-print square bandanas',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Velvet Bow Tie',
    price: 1699,
    image: img('photo-1558171813-4c088753af8f'),
    description: 'Pre-tied evening bow tie',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Blue-Light Reading Glasses',
    price: 2299,
    image: img('photo-1574258495973-f010dfbb5371'),
    description: 'Clear frame readers',
    category: 'women',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'PD Fast Charger 35W',
    price: 3499,
    image: img('photo-1616624877877-705391612cbf'),
    description: 'Compact USB-C wall charger',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Silicone Earbud Case',
    price: 1299,
    image: img('photo-1599493367397-e94cc981bd76'),
    description: 'Shock-proof buds case',
    category: 'women',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Satin Sleep Mask',
    price: 899,
    image: img('photo-1515372039744-b8f02a3ae446'),
    description: 'Cool-touch eye mask',
    category: 'women',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Kids Character Backpack',
    price: 2699,
    image: img('photo-1622560488106-93383817629d'),
    description: 'Lightweight school backpack',
    category: 'children',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Kids Water Bottle Flip-Top',
    price: 899,
    image: img('photo-1602146685888-62866354391e'),
    description: 'BPA-free bottle — prints vary',
    category: 'children',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Kids Novelty Snap Bracelet',
    price: 499,
    image: img('photo-1599643478518-a784e5dc4c8f'),
    description: 'Colourful snap bracelets',
    category: 'children',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Sports Sweatband Duo',
    price: 699,
    image: img('photo-1571019613454-4cb846978793'),
    description: 'Wrist sweatbands',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Wide-Brim Straw Hat',
    price: 3299,
    image: img('photo-1521369909029-2af98088300d'),
    description: 'Summer straw sun hat',
    category: 'women',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Leather Card Holder Slim',
    price: 2199,
    image: img('photo-1627123425744-d5a041394053'),
    description: 'Four-slot minimal wallet',
    category: 'women',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Canvas Belt Bag',
    price: 3799,
    image: img('photo-1515886657613-9f3515b0c78f'),
    description: 'Hands-free waist bag',
    category: 'women',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Stainless Money Clip',
    price: 1499,
    image: img('photo-1628348060619-7ff005fe195e'),
    description: 'Brushed steel cash clip',
    category: 'men',
    sizes: ['One Size'],
    type: 'Accessories'
  },
  {
    name: 'Kids Sun Hat Wide Brim',
    price: 1199,
    image: img('photo-1515488764276-be28ccbc7288'),
    description: 'UPF-rated kids sun hat',
    category: 'children',
    sizes: ['One Size'],
    type: 'Accessories'
  }
];
