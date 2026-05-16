import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const OrderPage = () => {
 const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    loadOrders();
  }, [isAuthenticated, navigate]);

  const loadOrders = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/orders', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      
      if (response.ok) {
        setOrders(data);
      } else {
        setError(data.message || 'Error loading orders');
      }
    } catch (err) {
      console.error('Error loading orders:', err);
      setError('Unable to load orders');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#f59e0b';
      case 'confirmed': return '#3b82f6';
      case 'processing': return '#8b5cf6';
      case 'shipped': return '#9d8260';
      case 'delivered': return '#10b981';
      case 'cancelled': return '#ef4444';
      default: return '#6b7280';
    }
  };

  if (loading) return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ textAlign: 'center', color: '#d4af37', fontSize: '1.4rem' }}>
        Loading orders...
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
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            background: 'linear-gradient(45deg, #f8fafc, #d4af37, #f8fafc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px'
          }}>
            My Orders
          </h1>
          <p style={{
            color: '#cbd5e1',
            fontSize: '1.2rem'
          }}>
            Track and manage your DripSole orders
          </p>
        </div>

        {error && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#fecaca',
            padding: '20px',
            borderRadius: '15px',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        {orders.length === 0 ? (
          <div style={{
            textAlign: 'center',
            backgroundColor: '#1e293b',
            borderRadius: '25px',
            padding: '80px 40px',
            border: '1px solid #334155'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🛒</div>
            <h3 style={{
              fontSize: '2rem',
              marginBottom: '15px',
              color: '#f8fafc'
            }}>
              No Orders Yet
            </h3>
            <p style={{
              color: '#cbd5e1',
              fontSize: '1.1rem',
              marginBottom: '30px'
            }}>
              Start shopping to see your orders here
            </p>
            <button
              onClick={() => navigate('/')}
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f7d794 100%)',
                color: '#0f172a',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gap: '30px'
          }}>
            {orders.map(order => (
              <div 
                key={order._id}
                style={{
                  backgroundColor: '#1e293b',
                  borderRadius: '25px',
                  padding: '40px',
                  border: '1px solid #334155',
                  boxShadow: '0 20px 60px rgba(15, 23, 42, 0.6)'
                }}
              >
                {/* Order Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '30px',
                  flexWrap: 'wrap',
                  gap: '20px'
                }}>
                  <div>
                    <h3 style={{
                      color: '#f8fafc',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      marginBottom: '5px'
                    }}>
                      Order #{order._id.slice(-8)}
                    </h3>
                    <p style={{
                      color: '#cbd5e1',
                      fontSize: '1rem'
                    }}>
                      Placed on {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div style={{
                    background: getStatusColor(order.status),
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    {order.status}
                  </div>
                </div>

                {/* Order Items */}
                <div style={{
                  marginBottom: '30px'
                }}>
                  <h4 style={{
                    color: '#f8fafc',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    marginBottom: '20px'
                  }}>
                    Items Ordered:
                  </h4>
                  <div style={{
                    display: 'grid',
                    gap: '20px'
                  }}>
                    {order.items.map((item, index) => (
                      <div 
                        key={index}
                        style={{
                          display: 'flex',
                          gap: '20px',
                          background: 'rgba(51, 65, 85, 0.3)',
                          padding: '20px',
                          borderRadius: '15px'
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'cover',
                            borderRadius: '10px'
                          }}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/80x80/334155/d4af37?text=DS';
                          }}
                        />
                        <div style={{ flex: 1 }}>
                         <h5
  style={{
    color: '#f8fafc',
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '5px',
    cursor: 'pointer'
  }}
  onClick={() =>
    navigate('/product', {
      state: {
        product: item
      }
    })
  }
>
  {item.name}
</h5>
                          <p style={{
                            color: '#cbd5e1',
                            fontSize: '0.9rem',
                            marginBottom: '5px'
                          }}>
                            {item.category} • {item.type} • Size: {item.selectedSize}
                          </p>
                          <p style={{
                            color: '#d4af37',
                            fontSize: '1.1rem',
                            fontWeight: '600'
                          }}>
                            ₹{item.price.toLocaleString('en-IN')} × {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Address */}
                <div style={{
                  marginBottom: '30px'
                }}>
                  <h4 style={{
                    color: '#f8fafc',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    marginBottom: '15px'
                  }}>
                    Shipping Address:
                  </h4>
                  <div style={{
                    background: 'rgba(51, 65, 85, 0.3)',
                    padding: '20px',
                    borderRadius: '15px',
                    color: '#cbd5e1',
                    lineHeight: '1.6'
                  }}>
                    <div style={{ fontWeight: '600', color: '#f8fafc' }}>{order.shippingAddress.name}</div>
                    <div>{order.shippingAddress.phone}</div>
                    <div>{order.shippingAddress.street}</div>
                    <div>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</div>
                    <div>{order.shippingAddress.country}</div>
                  </div>
                </div>

                {/* Order Summary */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(212, 175, 55, 0.1)',
                  padding: '20px',
                  borderRadius: '15px',
                  border: '1px solid #d4af37'
                }}>
                  <div>
                    <div style={{
                      color: '#cbd5e1',
                      fontSize: '0.9rem',
                      marginBottom: '5px'
                    }}>
                      Payment Method: <span style={{ color: '#f8fafc', fontWeight: '600' }}>Cash on Delivery</span>
                    </div>
                    <div style={{
                      color: '#cbd5e1',
                      fontSize: '0.9rem'
                    }}>
                      Items: {order.items.reduce((total, item) => total + item.quantity, 0)}
                    </div>
                  </div>
                  <div style={{
                    textAlign: 'right'
                  }}>
                    <div style={{
                      color: '#cbd5e1',
                      fontSize: '0.9rem',
                      marginBottom: '5px'
                    }}>
                      Total Amount:
                    </div>
                    <div style={{
                      color: '#d4af37',
                      fontSize: '2rem',
                      fontWeight: '700'
                    }}>
                     ₹{(order.total || 0).toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
