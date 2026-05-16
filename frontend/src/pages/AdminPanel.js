import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import { getProductImage } from '../utils/productImages';
const AdminPanel = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isAuthenticated || !user?.isAdmin) {
      navigate('/');
      return;
    }
    loadOrders();
  }, [isAuthenticated, user, navigate]);

  const loadOrders = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/admin/orders', {
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

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/admin/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        loadOrders();
        showToast('Order status updated.', 'success', 'Saved');
      } else {
        showToast('Could not update that order.', 'error');
      }
    } catch (err) {
      console.error('Error updating order:', err);
      showToast('Could not update order — try again.', 'error');
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
        Loading admin panel...
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
            👑 Admin Panel
          </h1>
          <p style={{
            color: '#cbd5e1',
            fontSize: '1.2rem'
          }}>
            Manage all DripSole orders and customers
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

        {/* Statistics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          <div style={{
            backgroundColor: '#1e293b',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid #334155',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>📦</div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#d4af37',
              marginBottom: '5px'
            }}>
              {orders.length}
            </div>
            <div style={{ color: '#cbd5e1', fontSize: '1rem' }}>Total Orders</div>
          </div>

          <div style={{
            backgroundColor: '#1e293b',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid #334155',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>⏳</div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#f59e0b',
              marginBottom: '5px'
            }}>
              {orders.filter(o => o.status === 'pending').length}
            </div>
            <div style={{ color: '#cbd5e1', fontSize: '1rem' }}>Pending Orders</div>
          </div>

          <div style={{
            backgroundColor: '#1e293b',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid #334155',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>✅</div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#10b981',
              marginBottom: '5px'
            }}>
              {orders.filter(o => o.status === 'delivered').length}
            </div>
            <div style={{ color: '#cbd5e1', fontSize: '1rem' }}>Delivered</div>
          </div>

          <div style={{
            backgroundColor: '#1e293b',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid #334155',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>💰</div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#d4af37',
              marginBottom: '5px'
            }}>
              ₹{orders.reduce((total, order) => total + order.total, 0).toLocaleString('en-IN')}
            </div>
            <div style={{ color: '#cbd5e1', fontSize: '1rem' }}>Total Revenue</div>
          </div>
        </div>

        {/* Orders List */}
        <div style={{
          backgroundColor: '#1e293b',
          borderRadius: '25px',
          padding: '40px',
          border: '1px solid #334155'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#f8fafc',
            marginBottom: '30px'
          }}>
            All Orders
          </h2>

          {orders.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px',
              color: '#cbd5e1'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📦</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#f8fafc' }}>
                No Orders Yet
              </h3>
              <p>Orders will appear here once customers start placing them</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gap: '25px'
            }}>
              {orders.map(order => (
                <div 
                  key={order._id}
                  style={{
                    background: 'rgba(51, 65, 85, 0.3)',
                    borderRadius: '20px',
                    padding: '30px',
                    border: '1px solid #475569'
                  }}
                >
                  {/* Order Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '25px',
                    flexWrap: 'wrap',
                    gap: '15px'
                  }}>
                    <div>
                      <h3 style={{
                        color: '#f8fafc',
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        marginBottom: '5px'
                      }}>
                        Order #{order._id.slice(-8)}
                      </h3>
                      <div style={{
                        color: '#cbd5e1',
                        fontSize: '0.9rem'
                      }}>
                        Customer: {order.user?.name} ({order.user?.email})
                      </div>
                      <div style={{
                        color: '#cbd5e1',
                        fontSize: '0.9rem'
                      }}>
                        Date: {new Date(order.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px'
                    }}>
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                        style={{
                          background: '#334155',
                          color: '#f8fafc',
                          border: '2px solid #475569',
                          padding: '8px 15px',
                          borderRadius: '10px',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                      
                      <div style={{
                        background: getStatusColor(order.status),
                        color: 'white',
                        padding: '6px 15px',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        {order.status}
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div style={{
                    marginBottom: '20px'
                  }}>
                    <h4 style={{
                      color: '#f8fafc',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '15px'
                    }}>
                      Items Ordered:
                    </h4>
                    <div style={{
                      display: 'grid',
                      gap: '15px'
                    }}>
                      {order.items.map((item, index) => (
                        <div 
                          key={index}
                          style={{
                            display: 'flex',
                            gap: '15px',
                            background: 'rgba(30, 41, 59, 0.5)',
                            padding: '15px',
                            borderRadius: '10px'
                          }}
                        >
                          <button
  onClick={() => navigate('/admin-orders')}
  className="ds-btn ds-btn--primary"
>
  Manage Orders
</button>
                          <img
                           src={item.image}
                            alt={item.name}
                            style={{
                              width: '60px',
                              height: '60px',
                              objectFit: 'cover',
                              borderRadius: '8px'
                            }}
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/60x60/334155/d4af37?text=DS';
                            }}
                          />
                          <div style={{ flex: 1 }}>
                            <h5 style={{
                              color: '#f8fafc',
                              fontSize: '1rem',
                              fontWeight: '600',
                              marginBottom: '3px'
                            }}>
                              {item.name}
                            </h5>
                            <p style={{
                              color: '#cbd5e1',
                              fontSize: '0.8rem',
                              marginBottom: '3px'
                            }}>
                              {item.category} • {item.type} • Size: {item.selectedSize}
                            </p>
                            <p style={{
                              color: '#d4af37',
                              fontSize: '0.9rem',
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
                    marginBottom: '20px'
                  }}>
                    <h4 style={{
                      color: '#f8fafc',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      Shipping Address:
                    </h4>
                    <div style={{
                      background: 'rgba(30, 41, 59, 0.5)',
                      padding: '15px',
                      borderRadius: '10px',
                      color: '#cbd5e1',
                      fontSize: '0.9rem',
                      lineHeight: '1.5'
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
                    padding: '15px',
                    borderRadius: '10px',
                    border: '1px solid rgba(212, 175, 55, 0.3)'
                  }}>
                    <div>
                      <div style={{
                        color: '#cbd5e1',
                        fontSize: '0.8rem',
                        marginBottom: '3px'
                      }}>
                        Payment: <span style={{ color: '#f8fafc', fontWeight: '600' }}>Cash on Delivery</span>
                      </div>
                      <div style={{
                        color: '#cbd5e1',
                        fontSize: '0.8rem'
                      }}>
                        Items: {order.items.reduce((total, item) => total + item.quantity, 0)}
                      </div>
                    </div>
                    <div style={{
                      textAlign: 'right'
                    }}>
                      <div style={{
                        color: '#cbd5e1',
                        fontSize: '0.8rem',
                        marginBottom: '3px'
                      }}>
                        Total Amount:
                      </div>
                      <div style={{
                        color: '#d4af37',
                        fontSize: '1.5rem',
                        fontWeight: '700'
                      }}>
                        ₹(order.total || 0).toLocaleString('en-IN')
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
