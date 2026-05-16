import React, { useState } from 'react';

import {
  useLocation,
  useNavigate
} from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const ProductDetail = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  const { addToCart } = useCart();

  const { showToast } = useToast();

  const product = location.state?.product;

  const [selectedSize, setSelectedSize] =
    useState('UK 8');

  useState(1);

  if (!product) {
    return (
      <div
        style={{
          color: 'white',
          padding: '100px',
          background: '#0f172a',
          minHeight: '100vh'
        }}
      >
        Product not found
      </div>
    );
  }

  const sizes =
  product.type === 'Accessories'
    ? ['Standard Size']
    : [
        'UK 6',
        'UK 7',
        'UK 8',
        'UK 9',
        'UK 10'
      ];

  const handleAddToCart = () => {
    addToCart(
      product,
      selectedSize,
      quantity
    );

    showToast(
      `${product.name} added to cart`,
      'success'
    );
  };

  const handleBuyNow = () => {
    addToCart(
      product,
      selectedSize,
      quantity
    );

    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    navigate('/checkout');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg,#0f172a,#1e293b)',
        padding: '40px'
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: '12px 20px',
          borderRadius: '12px',
          border: 'none',
          background: '#334155',
          color: 'white',
          cursor: 'pointer',
          marginBottom: '30px'
        }}
      >
        ← Back
      </button>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit,minmax(320px,1fr))',
          gap: '50px',
          alignItems: 'center'
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '650px',
            objectFit: 'cover',
            borderRadius: '25px'
          }}
        />

        <div>
          <h1
            style={{
              color: 'white',
              fontSize: '3rem',
              marginBottom: '20px'
            }}
          >
            {product.name}
          </h1>

          <h2
          
            style={{
              color: '#d4b896',
              marginBottom: '20px'
            }}
          >
            ₹{product.price}
          </h2>

          <p
            style={{
              color: '#cbd5e1',
              lineHeight: '1.8',
              marginBottom: '30px'
            }}
          >
            Premium luxury DripSole
            collection.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '30px',
              flexWrap: 'wrap'
            }}
          >
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() =>
                  setSelectedSize(size)
                }
                style={{
                  padding: '12px 18px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  background:
                    selectedSize === size
                      ? '#d4b896'
                      : '#334155',
                  color:
                    selectedSize === size
                      ? '#111'
                      : 'white'
                }}
              >
                {size}
              </button>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              gap: '15px'
            }}
          >
            <button
              onClick={handleAddToCart}
              style={{
                flex: 1,
                padding: '18px',
                borderRadius: '16px',
                border: 'none',
                background: '#334155',
                color: 'white',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              style={{
                flex: 1,
                padding: '18px',
                borderRadius: '16px',
                border: 'none',
                background: '#d4b896',
                color: '#111',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;