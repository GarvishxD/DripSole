import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import PageBanner from '../components/Layout/PageBanner';

const initialShipping = {
  name: '',
  phone: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  country: 'India'
};

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { isAuthenticated, loading: authLoading } = useAuth();
  const { cartItems, totalPrice, clearCart } = useCart();

  const [loading, setLoading] = useState(false);
  const [shippingInfo, setShippingInfo] = useState(initialShipping);

  useEffect(() => {
    if (authLoading) return;
    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: '/checkout' } } });
    }
  }, [isAuthenticated, authLoading, navigate]);

  useEffect(() => {
    if (authLoading || !isAuthenticated) return;
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems.length, isAuthenticated, authLoading, navigate]);

  const handleChange = (field, value) => {
    setShippingInfo((prev) => ({ ...prev, [field]: value }));
  };

  const buildOrderItems = () =>
    cartItems.map((item) => ({
      productId: item._id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
      type:
        typeof item.type === 'string'
          ? item.type.toLowerCase()
          : 'shoes',
      selectedSize: item.selectedSize || 'One Size',
      quantity: item.quantity,
      subCategory: item.subCategory || ''
    }));

  const handlePlaceOrder = async () => {
    if (
      !shippingInfo.name ||
      !shippingInfo.phone ||
      !shippingInfo.street ||
      !shippingInfo.city ||
      !shippingInfo.state ||
      !shippingInfo.zipCode
    ) {
      showToast(
        'Fill in every delivery field marked required — we ship exactly where you tell us.',
        'warning',
        'Almost there'
      );
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          items: buildOrderItems(),
          shippingAddress: shippingInfo,
          paymentMethod: 'cod'
        })
      });

      const data = await response.json();

      if (response.ok) {
        showToast(
          'Your order is confirmed. Track it anytime under My Orders.',
          'success',
          'Order placed'
        );
        clearCart();
        navigate('/order');
      } else {
        showToast(
          data.message || data.msg || 'Could not place order. Try again.',
          'error'
        );
      }
    } catch (error) {
      showToast(
        'Network issue — check your connection and try placing the order again.',
        'error'
      );
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || !isAuthenticated) {
    return (
      <div className="ds-page-loading" style={{ minHeight: '70vh' }}>
        <div className="ds-spinner" aria-hidden />
        <p>Loading checkout…</p>
      </div>
    );
  }

  return (
    <div className="ds-page">
      <PageBanner
        eyebrow="Secure checkout"
        title="Where should we deliver?"
        subtitle="COD available — pay when your parcel arrives. Double-check your PIN so routing stays accurate."
        variant="default"
      />

      <div className="ds-checkout-grid">
        <div className="ds-panel ds-panel--padding">
          <h2
            style={{
              fontFamily: 'var(--ds-display)',
              fontSize: '1.35rem',
              marginBottom: '20px',
              color: 'var(--ds-text)'
            }}
          >
            Delivery details
          </h2>

          <div className="ds-field-grid">
            <div className="ds-field-full">
              <label className="ds-label" htmlFor="ship-name">
                Full name *
              </label>
              <input
                id="ship-name"
                className="ds-input"
                autoComplete="name"
                value={shippingInfo.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div>
              <label className="ds-label" htmlFor="ship-phone">
                Phone *
              </label>
              <input
                id="ship-phone"
                className="ds-input"
                type="tel"
                autoComplete="tel"
                value={shippingInfo.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </div>
            <div>
              <label className="ds-label" htmlFor="ship-zip">
                ZIP / PIN *
              </label>
              <input
                id="ship-zip"
                className="ds-input"
                autoComplete="postal-code"
                value={shippingInfo.zipCode}
                onChange={(e) => handleChange('zipCode', e.target.value)}
              />
            </div>
            <div className="ds-field-full">
              <label className="ds-label" htmlFor="ship-street">
                Street address *
              </label>
              <input
                id="ship-street"
                className="ds-input"
                autoComplete="street-address"
                value={shippingInfo.street}
                onChange={(e) => handleChange('street', e.target.value)}
              />
            </div>
            <div>
              <label className="ds-label" htmlFor="ship-city">
                City *
              </label>
              <input
                id="ship-city"
                className="ds-input"
                autoComplete="address-level2"
                value={shippingInfo.city}
                onChange={(e) => handleChange('city', e.target.value)}
              />
            </div>
            <div>
              <label className="ds-label" htmlFor="ship-state">
                State *
              </label>
              <input
                id="ship-state"
                className="ds-input"
                autoComplete="address-level1"
                value={shippingInfo.state}
                onChange={(e) => handleChange('state', e.target.value)}
              />
            </div>
            <div className="ds-field-full">
              <label className="ds-label" htmlFor="ship-country">
                Country
              </label>
              <input
                id="ship-country"
                className="ds-input"
                autoComplete="country-name"
                value={shippingInfo.country}
                onChange={(e) => handleChange('country', e.target.value)}
              />
            </div>
          </div>

          <Link
            to="/cart"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              color: 'var(--ds-accent)',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            ← Back to cart
          </Link>
        </div>

        <aside className="ds-summary-card">
          <h2
            style={{
              fontFamily: 'var(--ds-display)',
              fontSize: '1.35rem',
              marginBottom: '18px',
              color: 'var(--ds-text)'
            }}
          >
            Order summary
          </h2>

          <div style={{ maxHeight: '320px', overflowY: 'auto', paddingRight: '6px' }}>
            {cartItems.map((item) => (
              <div
                key={`${item._id}-${item.selectedSize}`}
                style={{
                  marginBottom: '14px',
                  paddingBottom: '14px',
                  borderBottom: '1px solid var(--ds-border)'
                }}
              >
                <p style={{ color: 'var(--ds-text)', margin: 0, fontWeight: 600 }}>
                  {item.name}
                </p>
                <p style={{ color: 'var(--ds-text-muted)', fontSize: '0.88rem', margin: '6px 0 0' }}>
                  Size {item.selectedSize} · Qty {item.quantity}
                </p>
                <p style={{ color: 'var(--ds-accent)', margin: '8px 0 0', fontWeight: 700 }}>
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </p>
              </div>
            ))}
          </div>

          <div className="ds-summary-row" style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--ds-border)' }}>
            <span>Total</span>
            <span style={{ color: 'var(--ds-accent)', fontWeight: 800, fontSize: '1.25rem' }}>
              ₹{totalPrice.toLocaleString('en-IN')}
            </span>
          </div>

          <p style={{ color: 'var(--ds-text-muted)', fontSize: '0.82rem', marginTop: '14px', lineHeight: 1.5 }}>
            Cash on delivery — pay the courier when your package arrives. Free standard shipping on this order.
          </p>

          <button
            type="button"
            className="ds-btn ds-btn--primary"
            style={{
              width: '100%',
              marginTop: '18px',
              opacity: loading || cartItems.length === 0 ? 0.65 : 1,
              cursor: loading || cartItems.length === 0 ? 'not-allowed' : 'pointer'
            }}
            disabled={loading || cartItems.length === 0}
            onClick={handlePlaceOrder}
          >
            {loading ? 'Placing order…' : 'Place order'}
          </button>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
