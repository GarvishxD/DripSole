import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import PageBanner from '../components/Layout/PageBanner';
const CartPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    totalPrice,
    totalItems
  } = useCart();

  const goToCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login', {
        state: { from: { pathname: '/checkout' } }
      });
      return;
    }
    navigate('/checkout');
  };

  return (
    <div className="ds-page">
      <PageBanner
        eyebrow={`${totalItems} item${totalItems !== 1 ? 's' : ''} in your bag`}
        title="Your cart"
        subtitle="Review sizes and quantities before checkout. Prices include catalog snapshot — final totals are confirmed at delivery details."
        variant="default"
      />

      {cartItems.length === 0 ? (
        <div className="ds-empty ds-panel ds-panel--padding" style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto' }}>
          <p style={{ fontSize: '3rem', marginBottom: '12px' }}>🛒</p>
          <h2 style={{ color: 'var(--ds-text)', marginBottom: '12px' }}>Your cart is empty</h2>
          <p style={{ color: 'var(--ds-text-muted)', marginBottom: '24px' }}>
            Browse shoes, apparel or accessories — everything ships with tracked delivery.
          </p>
          <button
            type="button"
            className="ds-btn ds-btn--primary"
            onClick={() => navigate('/')}
          >
            Continue shopping
          </button>
        </div>
      ) : (
        <div className="ds-cart-layout">
          <div>
            {cartItems.map((item, index) => (
              <div
                key={`${item._id}-${item.selectedSize}`}
                className="ds-cart-row fade-in"
              >
                <img
                  className="ds-cart-thumb"
                 src={item.image}
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80';
                  }}
                />
                <div className="ds-cart-body">
                  <div className="ds-cart-title">{item.name}</div>
                  <div className="ds-cart-meta">Size {item.selectedSize}</div>
                  <div className="ds-cart-price">
                    ₹{Number(item.price).toLocaleString('en-IN')} each
                  </div>
                  <div className="ds-qty-row">
                    <button
                      type="button"
                      className="ds-qty-btn"
                      aria-label="Decrease quantity"
                      onClick={() =>
                        updateQuantity(
                          item._id,
                          item.selectedSize,
                          item.quantity - 1
                        )
                      }
                    >
                      −
                    </button>
                    <span style={{ color: 'var(--ds-text)', fontWeight: 700, minWidth: 28, textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      className="ds-qty-btn"
                      aria-label="Increase quantity"
                      onClick={() =>
                        updateQuantity(
                          item._id,
                          item.selectedSize,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="ds-cart-remove"
                    onClick={() =>
                      removeFromCart(item._id, item.selectedSize)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="ds-summary-card">
            <h2>Order summary</h2>
            <div className="ds-summary-row">
              <span>Subtotal ({totalItems} pcs)</span>
              <span>₹{Number(totalPrice).toLocaleString('en-IN')}</span>
            </div>
            <div className="ds-summary-row">
              <span>Shipping</span>
              <span style={{ color: 'var(--ds-success)' }}>Complimentary</span>
            </div>
            <div className="ds-summary-total">
              ₹{Number(totalPrice).toLocaleString('en-IN')}
            </div>
            <button
              type="button"
              className="ds-btn ds-btn--primary"
              style={{ width: '100%', marginTop: '20px' }}
              onClick={goToCheckout}
            >
              Proceed to checkout
            </button>
            <button
              type="button"
              className="ds-btn ds-btn--ghost"
              style={{ width: '100%', marginTop: '12px' }}
              onClick={() => navigate('/')}
            >
              Keep browsing
            </button>
          </aside>
        </div>
      )}
    </div>
  );
};

export default CartPage;
