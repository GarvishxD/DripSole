import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [orderLoading, setOrderLoading] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India'
  });

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`);
      if (!response.ok) {
        throw new Error('Product not found');
      }
      const data = await response.json();
      setProduct(data);
      if (data.sizes && data.sizes.length > 0) {
        setSelectedSize(data.sizes[0]);
      }
    } catch (err) {
      setError('Product not found');
    } finally {
      setLoading(false);
    }
  };

  const handleOrder = async () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    if (!shippingInfo.name || !shippingInfo.phone || !shippingInfo.street || !shippingInfo.city || !shippingInfo.state || !shippingInfo.zipCode) {
      alert('Please fill all shipping information');
      return;
    }

    setOrderLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          items: [{
            productId: product._id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            type: product.type || 'shoes',
            selectedSize,
            quantity,
            subCategory: product.subCategory || ''
          }],
          shippingAddress: shippingInfo,
          paymentMethod: 'cod'
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        setOrderSuccess(true);
      } else {
        alert(data.message || 'Error placing order');
      }
    } catch (err) {
      console.error('Order error:', err);
      alert('Error placing order');
    } finally {
      setOrderLoading(false);
    }
  };

  if (loading) return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      color: '#d4af37',
      fontSize: '1.4rem'
    }}>
      Loading product...
    </div>
  );

  if (error) return (
    <div style={{ 
      textAlign: 'center',
      padding: '100px 20px',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '100vh',
      color: '#f59e0b',
      fontSize: '1.2rem'
    }}>
      {error}
    </div>
  );

  if (orderSuccess) return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        textAlign: 'center',
        background: '#1e293b',
        padding: '60px 40px',
        borderRadius: '25px',
        border: '2px solid #d4af37',
        maxWidth: '500px'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '20px',
          background: 'linear-gradient(45deg, #f8fafc, #d4af37, #f8fafc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Order Placed Successfully!
        </h2>
        <p style={{ color: '#cbd5e1', fontSize: '1.1rem', marginBottom: '30px' }}>
          Your order for {product.name} has been placed successfully.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button
            onClick={() => navigate('/order')}
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #f7d794 100%)',
              color: '#0f172a',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '25px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            View Orders
          </button>
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)',
              color: '#f8fafc',
              padding: '15px 30px',
              border: '2px solid #d4af37',
              borderRadius: '25px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 20%, #334155 40%, #1e293b 60%, #0f172a 100%)',
      paddingBottom: '60px'
    }}>
      <div style={{
        padding: '40px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            background: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)',
            color: '#f8fafc',
            border: '2px solid #d4af37',
            padding: '12px 24px',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '40px'
          }}
        >
          ← Back
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))',
          gap: '60px'
        }}>
          {/* Product Image */}
          <div style={{
            backgroundColor: '#1e293b',
            borderRadius: '25px',
            padding: '40px',
            border: '1px solid #334155'
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '20px'
              }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x500/334155/d4af37?text=DripSole';
              }}
            />
          </div>

          {/* Product Details & Order Form */}
          <div style={{
            backgroundColor: '#1e293b',
            borderRadius: '25px',
            padding: '40px',
            border: '1px solid #334155'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #f7d794 100%)',
              color: '#0f172a',
              padding: '8px 16px',
              borderRadius: '15px',
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '20px'
            }}>
              {product.category} • {product.subCategory || product.type}
            </div>

            <h1 style={{
              fontSize: '3rem',
              fontWeight: '800',
              background: 'linear-gradient(45deg, #f8fafc, #d4af37, #f8fafc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '20px'
            }}>
              {product.name}
            </h1>

            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#d4af37',
              marginBottom: '30px'
            }}>
              ₹{product.price.toLocaleString('en-IN')}
            </div>

            <p style={{
              color: '#cbd5e1',
              fontSize: '1.2rem',
              lineHeight: '1.8',
              marginBottom: '30px'
            }}>
              {product.description}
            </p>

            {/* Size Selection */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{
                display: 'block',
                color: '#f8fafc',
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '10px'
              }}>
                Select Size:
              </label>
              <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap'
              }}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      background: selectedSize === size 
                        ? 'linear-gradient(135deg, #d4af37 0%, #f7d794 100%)' 
                        : 'rgba(51, 65, 85, 0.5)',
                      color: selectedSize === size ? '#0f172a' : '#cbd5e1',
                      border: `2px solid ${selectedSize === size ? '#d4af37' : '#475569'}`,
                      padding: '12px 20px',
                      borderRadius: '15px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: '600'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div style={{ marginBottom: '40px' }}>
              <label style={{
                display: 'block',
                color: '#f8fafc',
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '10px'
              }}>
                Quantity:
              </label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{
                    background: '#334155',
                    color: '#f8fafc',
                    border: '2px solid #475569',
                    width: '50px',
                    height: '50px',
                    borderRadius: '15px',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    fontWeight: '600'
                  }}
                >
                  -
                </button>
                <span style={{
                  color: '#f8fafc',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  minWidth: '40px',
                  textAlign: 'center'
                }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{
                    background: '#334155',
                    color: '#f8fafc',
                    border: '2px solid #475569',
                    width: '50px',
                    height: '50px',
                    borderRadius: '15px',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    fontWeight: '600'
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Shipping Information */}
            <div style={{
              background: 'rgba(51, 65, 85, 0.3)',
              padding: '30px',
              borderRadius: '20px',
              marginBottom: '30px'
            }}>
              <h3 style={{
                color: '#f8fafc',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px'
              }}>
                Shipping Information
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    color: '#cbd5e1',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    marginBottom: '5px'
                  }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={shippingInfo.name}
                    onChange={(e) => setShippingInfo({...shippingInfo, name: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      borderRadius: '10px',
                      border: '2px solid #475569',
                      background: 'rgba(51, 65, 85, 0.5)',
                      color: '#f8fafc',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: '#cbd5e1',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    marginBottom: '5px'
                  }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      borderRadius: '10px',
                      border: '2px solid #475569',
                      background: 'rgba(51, 65, 85, 0.5)',
                      color: '#f8fafc',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{
                    display: 'block',
                    color: '#cbd5e1',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    marginBottom: '5px'
                  }}>
                    Street Address *
                  </label>
                  <input
                    type="text"
                    value={shippingInfo.street}
                    onChange={(e) => setShippingInfo({...shippingInfo, street: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      borderRadius: '10px',
                      border: '2px solid #475569',
                      background: 'rgba(51, 65, 85, 0.5)',
                      color: '#f8fafc',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: '#cbd5e1',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    marginBottom: '5px'
                  }}>
                    City *
                  </label>
                  <input
                    type="text"
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      borderRadius: '10px',
                      border: '2px solid #475569',
                      background: 'rgba(51, 65, 85, 0.5)',
                      color: '#f8fafc',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: '#cbd5e1',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    marginBottom: '5px'
                  }}>
                    State *
                  </label>
                  <input
                    type="text"
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      borderRadius: '10px',
                      border: '2px solid #475569',
                      background: 'rgba(51, 65, 85, 0.5)',
                      color: '#f8fafc',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: '#cbd5e1',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    marginBottom: '5px'
                  }}>
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    value={shippingInfo.zipCode}
                    onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      borderRadius: '10px',
                      border: '2px solid #475569',
                      background: 'rgba(51, 65, 85, 0.5)',
                      color: '#f8fafc',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div style={{
              background: 'rgba(212, 175, 55, 0.1)',
              padding: '25px',
              borderRadius: '20px',
              marginBottom: '30px',
              border: '1px solid #d4af37'
            }}>
              <h3 style={{
                color: '#f8fafc',
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '15px'
              }}>
                Order Summary
              </h3>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
                color: '#cbd5e1'
              }}>
                <span>Product Price:</span>
                <span>₹{product.price.toLocaleString('en-IN')}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
                color: '#cbd5e1'
              }}>
                <span>Quantity:</span>
                <span>× {quantity}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '15px',
                color: '#cbd5e1'
              }}>
                <span>Shipping:</span>
                <span style={{ color: '#10b981' }}>Free</span>
              </div>
              <div style={{
                borderTop: '2px solid #d4af37',
                paddingTop: '15px',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#d4af37'
              }}>
                <span>Total:</span>
                <span>₹{(product.price * quantity).toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrder}
              disabled={orderLoading}
              style={{
                width: '100%',
                background: orderLoading ? '#6b7280' : 'linear-gradient(135deg, #d4af37 0%, #f7d794 100%)',
                color: '#0f172a',
                border: 'none',
                padding: '20px 40px',
                borderRadius: '25px',
                cursor: orderLoading ? 'not-allowed' : 'pointer',
                fontSize: '1.3rem',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease'
              }}
            >
              {orderLoading ? 'Placing Order...' : 'Order Now (Cash on Delivery)'}
            </button>

            <div style={{
              textAlign: 'center',
              marginTop: '20px',
              color: '#94a3b8',
              fontSize: '0.9rem'
            }}>
              💳 Cash on Delivery • 🚚 Free Shipping • 🔒 100% Secure
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#1e293b',
            padding: '40px',
            borderRadius: '25px',
            border: '2px solid #d4af37',
            textAlign: 'center',
            maxWidth: '400px'
          }}>
            <h3 style={{
              color: '#f8fafc',
              fontSize: '1.8rem',
              fontWeight: '700',
              marginBottom: '20px'
            }}>
              Login Required
            </h3>
            <p style={{
              color: '#cbd5e1',
              marginBottom: '30px',
              fontSize: '1.1rem'
            }}>
              Please login or create an account to place your order
            </p>
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center'
            }}>
              <Link
                to="/login"
                style={{
                  background: 'linear-gradient(135deg, #d4af37 0%, #f7d794 100%)',
                  color: '#0f172a',
                  padding: '15px 30px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}
              >
                Login
              </Link>
              <Link
                to="/signup"
                style={{
                  background: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)',
                  color: '#f8fafc',
                  padding: '15px 30px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  border: '2px solid #d4af37'
                }}
              >
                Sign Up
              </Link>
            </div>
            <button
              onClick={() => setShowAuthModal(false)}
              style={{
                background: 'transparent',
                color: '#94a3b8',
                border: 'none',
                marginTop: '20px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                textDecoration: 'underline'
              }}
            >
              Continue as Guest (Login Later)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
