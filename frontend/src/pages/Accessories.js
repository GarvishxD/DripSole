import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { productsAPI } from '../services/api';

const Accessories = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState('all');

  const categories = [
    {
      id: 'all',
      name: 'All Accessories',
      icon: '👜'
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
      const filters = { type: 'Accessories' };
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
    <div className="main-content">
      <div
        style={{
          height: '320px',
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '40px',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.2))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px'
          }}
        >
          <h1
            style={{
              color: 'white',
              fontSize: '3.5rem',
              marginBottom: '15px',
              fontWeight: '800'
            }}
          >
            Luxury Accessories
          </h1>

          <p
            style={{
              color: '#e2e8f0',
              fontSize: '1.2rem',
              maxWidth: '600px'
            }}
          >
            Watches, handbags,
            sunglasses, chains and more.
          </p>
        </div>
      </div>
            <div
        style={{
          display: 'flex',
          gap: '15px',
          marginBottom: '35px',
          flexWrap: 'wrap'
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() =>
              setSelectedCategory(cat.id)
            }
            style={{
              padding: '12px 24px',
              borderRadius: '30px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '700',
              background:
                selectedCategory === cat.id
                  ? '#d4af37'
                  : '#1e293b',
              color:
                selectedCategory === cat.id
                  ? '#111'
                  : 'white'
            }}
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
          <p>No accessories match this filter.</p>
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

export default Accessories;
       