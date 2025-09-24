import React, { useState, useEffect } from 'react';
import { ordersAPI } from '../../services/api';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    declined: 0,
    totalRevenue: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const response = await ordersAPI.getAllOrders();
        const ordersData = response.data;
        setOrders(ordersData);

        // Calculate stats
        const calculatedStats = {
          total: ordersData.length,
          pending: ordersData.filter(o => o.status === 'Pending').length,
          approved: ordersData.filter(o => o.status === 'Approved').length,
          declined: ordersData.filter(o => o.status === 'Declined').length,
          totalRevenue: ordersData
            .filter(o => o.status === 'Approved')
            .reduce((sum, order) => sum + order.total, 0)
        };
        setStats(calculatedStats);
      } catch (error) {
        console.error('Error loading dashboard:', error);
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="stats-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div className="stat-card" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h3>{stats.total}</h3>
          <p>Total Orders</p>
        </div>
        
        <div className="stat-card" style={{
          background: 'linear-gradient(135deg, #ffc107 0%, #ff8f00 100%)',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h3>{stats.pending}</h3>
          <p>Pending Orders</p>
        </div>
        
        <div className="stat-card" style={{
          background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h3>{stats.approved}</h3>
          <p>Approved Orders</p>
        </div>
        
        <div className="stat-card" style={{
          background: 'linear-gradient(135deg, #dc3545 0%, #e83e8c 100%)',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h3>{stats.declined}</h3>
          <p>Declined Orders</p>
        </div>
        
        <div className="stat-card" style={{
          background: 'linear-gradient(135deg, #17a2b8 0%, #6f42c1 100%)',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h3>${stats.totalRevenue.toFixed(2)}</h3>
          <p>Total Revenue</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="recent-orders">
        <h2>Recent Orders</h2>
        {orders.length === 0 ? (
          <p className="text-muted">No orders yet</p>
        ) : (
          <div className="orders-preview">
            {orders.slice(0, 5).map(order => (
              <div key={order._id} className="order-preview-card" style={{
                background: 'white',
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <strong>#{order._id?.slice(-8)}</strong> - {order.user?.name}
                  <br />
                  <small className="text-muted">
                    {order.items?.length} items - ${order.total}
                  </small>
                </div>
                <div>
                  <span className={`status-badge status-${order.status?.toLowerCase()}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
