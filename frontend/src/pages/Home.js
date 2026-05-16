import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import PageBanner from '../components/Layout/PageBanner';

import { shoesProducts } from '../utils/productImages';

const BANNER_IMG =
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=90';

const Home = () => {

  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] =
    useState('all');

  const categories = [
    { id: 'all', name: 'All Shoes', icon: '👟' },
    { id: 'men', name: 'Men', icon: '👨' },
    { id: 'women', name: 'Women', icon: '👩' },
    { id: 'children', name: 'Kids', icon: '🧒' }
  ];

  const filteredProducts = shoesProducts.filter(
    (product) => {

      if (selectedCategory === 'all') {
        return true;
      }

      if (
        selectedCategory === 'men' &&
        product.category === 'Men Shoes'
      ) {
        return true;
      }

      if (
        selectedCategory === 'women' &&
        product.category === 'Women Shoes'
      ) {
        return true;
      }

      if (
        selectedCategory === 'children' &&
        product.category === 'Kids Shoes'
      ) {
        return true;
      }

      return false;
    }
  );

  return (
    <div className="ds-page">

      <PageBanner
        eyebrow="New season • Premium kicks"
        title="Step into DripSole"
        subtitle="Hand-picked sneakers with studio photography, fast delivery, and hassle-free returns."
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
                loading="lazy"
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
                View Details
              </button>

            </div>

          </article>

        ))}

      </div>

    </div>
  );
};

export default Home;