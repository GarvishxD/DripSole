import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  accessoriesProducts
} from '../utils/productImages';

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
            <div className="ds-product-grid">
        {accessoriesProducts
          .filter((product) => {
            if (
              selectedCategory === 'all'
            )
              return true;

            if (
              selectedCategory ===
                'men' &&
              product.category ===
                'Men Accessories'
            )
              return true;

            if (
              selectedCategory ===
                'women' &&
              product.category ===
                'Women Accessories'
            )
              return true;

            if (
              selectedCategory ===
                'children' &&
              product.category ===
                'Kids Accessories'
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

export default Accessories;
       