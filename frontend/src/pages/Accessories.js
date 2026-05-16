import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import PageBanner from '../components/Layout/PageBanner';

import { accessoriesProducts } from '../utils/accessoriesData';

const BANNER_IMG =
  'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1600&q=85';

const Accessories = () => {

  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] =
    useState('all');

  const categories = [
    {
      id: 'all',
      name: 'All Accessories',
      icon: '👜'
    },

    {
      id: 'watches',
      name: 'Watches',
      icon: '⌚'
    },

    {
      id: 'bags',
      name: 'Bags',
      icon: '🎒'
    },

    {
      id: 'caps',
      name: 'Caps',
      icon: '🧢'
    }
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? accessoriesProducts
      : accessoriesProducts.filter(
          (product) =>
            product.category ===
            selectedCategory
        );

  return (
    <div className="ds-page">

      <PageBanner
        eyebrow="Luxury • Style • Essentials"
        title="Complete Your Drip"
        subtitle="Premium accessories crafted for modern streetwear aesthetics."
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
        Showing{' '}
        <strong
          style={{
            color: 'var(--ds-text)'
          }}
        >
          {filteredProducts.length}
        </strong>{' '}
        styles
      </p>

      <div className="ds-product-grid">

        {filteredProducts.map((product) => (

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
                ₹{Number(product.price).toLocaleString(
                  'en-IN'
                )}
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

    </div>
  );
};

export default Accessories;