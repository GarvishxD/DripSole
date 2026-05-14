import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { productsAPI } from '../services/api';
import PageBanner from '../components/Layout/PageBanner';

const BANNER_IMG =
  'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1600&q=85';

const Clothing = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState('all');

  const categories = [
    {
      id: 'all',
      name: 'All Clothing',
      icon: '👕'
    },
    {
      id: 'men',
      name: 'Men',
      icon: '👨'
    },
    {
      id: 'women',
      name: 'Women',
      icon: '👩'
    },
    {
      id: 'children',
      name: 'Kids',
      icon: '🧒'
    }
  ];

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const filters = { type: 'Clothing' };
      if (selectedCategory !== 'all') {
        filters.category = selectedCategory;
      }
      const response = await productsAPI.getAll(filters);
      // Handle both new and old response formats
      const productsData = response.data?.data || response.data || [];
      setProducts(Array.isArray(productsData) ? productsData : []);
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
        eyebrow="Layers • Texture • Fit"
        title="Fashion that moves with you"
        subtitle="Premium streetwear and aesthetic fits."
        backgroundImage={BANNER_IMG}
      />

      <div className="ds-chips">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`ds-chip${
              selectedCategory === cat.id
                ? ' ds-chip--active'
                : ''
            }`}
            onClick={() =>
              setSelectedCategory(cat.id)
            }
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
        Showing <strong style={{ color: 'var(--ds-text)' }}>{products.length}</strong>{' '}
        styles
      </p>

      {products.length === 0 ? (
        <div className="ds-empty ds-panel ds-panel--padding">
          <p>No clothing items match this filter.</p>
        </div>
      ) : (
        <div className="ds-product-grid">
          {products.map((product) => (
            <article
              key={product._id}
              className="ds-product-card fade-in"
            >
              <div className="ds-product-card__img-wrap">
                <img
                  className="ds-product-card__img"
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="ds-product-card__body">
                <h3 className="ds-product-card__name">
                  {product.name}
                </h3>

                <p className="ds-product-card__price">
                  ₹
                  {Number(
                    product.price
                  ).toLocaleString('en-IN')}
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
                  View Product
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Clothing;