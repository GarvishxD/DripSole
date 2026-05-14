import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import PageBanner from '../components/Layout/PageBanner';

import { clothingProducts } from '../utils/productImages';

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
      id: 'children',
      name: 'Kids',
      icon: '🧒'
    }
  ];
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
            <div className="ds-product-grid">
        {clothingProducts
          .filter((product) => {
            if (
              selectedCategory === 'all'
            )
              return true;

            if (
              selectedCategory ===
                'men' &&
              product.category ===
                'Men Clothing'
            )
              return true;

            if (
              selectedCategory ===
                'women' &&
              product.category ===
                'Women Clothing'
            )
              return true;

            if (
              selectedCategory ===
                'children' &&
              product.category ===
                'Kids Clothing'
            )
              return true;

            return false;
          })
          .map((product, index) => (
            <article
              key={index}
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
    </div>
  );
};

export default Clothing;