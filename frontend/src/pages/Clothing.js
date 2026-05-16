import React, { useState } from 'react';

import { clothingProducts } from '../utils/productImages';

import { useNavigate } from 'react-router-dom';

import PageBanner from '../components/Layout/PageBanner';

const BANNER_IMG =
  'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1600&q=85';

const Clothing = () => {

  const navigate = useNavigate();

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
      id: 'kids',
      name: 'Kids',
      icon: '🧒'
    }
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? clothingProducts
      : clothingProducts.filter((product) => {

          if (
            selectedCategory === 'men'
          ) {
            return (
              product.category ===
              'Men Clothing'
            );
          }

          if (
            selectedCategory === 'women'
          ) {
            return (
              product.category ===
              'Women Clothing'
            );
          }

          if (
            selectedCategory === 'kids'
          ) {
            return (
              product.category ===
              'Kids Clothing'
            );
          }

          return true;
        });

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

export default Clothing;