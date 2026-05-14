import { getProductImage } from '../utils/productImages';
import { shoesProducts } from '../utils/productImages';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsAPI } from '../services/api';
import PageBanner from '../components/Layout/PageBanner';

const BANNER_IMG =
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=90';

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Shoes', icon: '👟' },
    { id: 'men', name: 'Men', icon: '👨' },
    { id: 'women', name: 'Women', icon: '👩' },
    { id: 'children', name: 'Kids', icon: '🧒' }
  ];

  useEffect(() => {
    loadProducts();
  }, [selectedCategory]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const filters = { type: 'shoes' };
      if (selectedCategory !== 'all') {
        filters.category = selectedCategory;
      }
      const response = await productsAPI.getAll(filters);
      setProducts(response.data);
      setError('');
    } catch (err) {
      console.error('Error loading products:', err);
      setError('Unable to connect to our collection. Please try again shortly.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="ds-page-loading">
        <div className="ds-spinner" aria-hidden />
        <p>Loading collection…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ds-page-error ds-panel ds-panel--padding">
        <p className="ds-page-error__msg">{error}</p>
        <button
          type="button"
          className="ds-btn ds-btn--primary"
          onClick={() => loadProducts()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="ds-page">
      <PageBanner
        eyebrow="New season • Premium kicks"
        title="Step into DripSole"
        subtitle="Hand-picked sneakers with studio photography, fast delivery, and hassle-free returns. Filter by department and open any style for sizes."
        backgroundImage={BANNER_IMG}
      />

      <div className="ds-chips">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`ds-chip${selectedCategory === cat.id ? ' ds-chip--active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      <p
        style={{
          textAlign: 'center',
          color: 'var(--ds-text-muted)',
          marginBottom: '24px',
          fontSize: '0.95rem'
        }}
      >
        Showing <strong style={{ color: 'var(--ds-text)' }}>{
  shoesProducts.filter((product) => {
    if (selectedCategory === 'all')
      return true;

    if (
      selectedCategory === 'men' &&
      product.category === 'Men Shoes'
    )
      return true;

    if (
      selectedCategory === 'women' &&
      product.category === 'Women Shoes'
    )
      return true;

    if (
      selectedCategory === 'children' &&
      product.category === 'Kids Shoes'
    )
      return true;

    return false;
  }).length
}</strong>{' '}
        styles
      </p>

      {products.length === 0 ? (
        <div className="ds-empty ds-panel ds-panel--padding">
          <p>No shoes match this filter.</p>
        </div>
      ) : (
        <div className="ds-product-grid">
          {shoesProducts
  .filter((product) => {
    if (selectedCategory === 'all') return true;

    if (
      selectedCategory === 'men' &&
      product.category === 'Men Shoes'
    )
      return true;

    if (
      selectedCategory === 'women' &&
      product.category === 'Women Shoes'
    )
      return true;

    if (
      selectedCategory === 'children' &&
      product.category === 'Kids Shoes'
    )
      return true;

    return false;
  })
  .map((product, index) => (
            <article key={product._id} className="ds-product-card fade-in">
              <div className="ds-product-card__img-wrap">
                <img
                  className="ds-product-card__img"
                  src={product.image}
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80';
                  }}
                />
              </div>
              <div className="ds-product-card__body">
                <h3 className="ds-product-card__name">{product.name}</h3>
                <p className="ds-product-card__price">
                  ₹{Number(product.price).toLocaleString('en-IN')}
                </p>
                <button
                  type="button"
                  className="ds-btn ds-btn--primary"
                  style={{ width: '100%' }}
                  onClick={() =>
  navigate('/product', {
    state: { product }
  })
}
                >
                  View product
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
export const clothingProducts = [

  // MEN CLOTHING

  {
    name: 'Urban Drift Hoodie',
    price: 3499,
    category: 'Men Clothing',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80'
  },
  {
    name: 'Tokyo Streetwear Tee',
    price: 1999,
    category: 'Men Clothing',
    image:
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=900&q=80'
  },
  {
    name: 'Elite Bomber Jacket',
    price: 6999,
    category: 'Men Clothing',
    image:
      'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=900&q=80'
  },
  {
    name: 'Royal Black Cargo',
    price: 4299,
    category: 'Men Clothing',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80'
  },
  {
    name: 'Neo Oversized Sweatshirt',
    price: 2899,
    category: 'Men Clothing',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900&q=80'
  },



  // WOMEN CLOTHING

  {
    name: 'Royal Co-Ord Set',
    price: 5999,
    category: 'Women Clothing',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80'
  },
  {
    name: 'Luxury Fit Denim',
    price: 4599,
    category: 'Women Clothing',
    image:
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&q=80'
  },
  {
    name: 'Aura Beige Sweater',
    price: 2799,
    category: 'Women Clothing',
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=900&q=80'
  },
  {
    name: 'Velvet Pink Hoodie',
    price: 3299,
    category: 'Women Clothing',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&q=80'
  },
  {
    name: 'Diamond Street Jacket',
    price: 6499,
    category: 'Women Clothing',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80'
  },



  // KIDS CLOTHING

  {
    name: 'Kids Cartoon Hoodie',
    price: 1799,
    category: 'Kids Clothing',
    image:
      'https://images.unsplash.com/photo-1519238359922-989348752efb?w=900&q=80'
  },
  {
    name: 'Tiny Champs Tee',
    price: 999,
    category: 'Kids Clothing',
    image:
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=900&q=80'
  },
  {
    name: 'Mini Dino Sweatshirt',
    price: 1499,
    category: 'Kids Clothing',
    image:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=900&q=80'
  },
  {
    name: 'Rainbow Kids Hoodie',
    price: 1699,
    category: 'Kids Clothing',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80'
  },
  {
    name: 'Tiny Street Jacket',
    price: 2299,
    category: 'Kids Clothing',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80'
  }

];
export default Home;
