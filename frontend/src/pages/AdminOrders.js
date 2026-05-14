import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const res = await axios.get(
        'http://localhost:5000/api/orders'
      );

      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

 const updateStatus = async (id, status) => {
  try {
    await axios.put(
      `http://localhost:5000/api/orders/${id}`,
      { status }
    );

    loadOrders();
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="main-content">
      <h1
        style={{
          color: 'white',
          marginBottom: '30px'
        }}
      >
        Admin Order Approval
      </h1>

      <div
        style={{
          display: 'grid',
          gap: '20px'
        }}
      >
        {orders.map((order) => (
          <div
            key={order._id}
            style={{
              background: '#111',
              borderRadius: '20px',
              padding: '20px',
              border: '1px solid #333'
            }}
          >
            <h2 style={{ color: 'white' }}>
              Order ID: {order._id}
            </h2>

            <p
  style={{
    color:
      order.status === 'Delivered'
        ? '#22c55e'
        : order.status === 'Cancelled'
        ? '#ef4444'
        : '#facc15',
    fontWeight: '700'
  }}
>
  Status: {order.status || 'Pending'}
</p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit,minmax(220px,1fr))',
                gap: '15px',
                marginTop: '20px'
              }}
            >
              {order.items.map((item) => (
                <div
                  key={item._id}
                  style={{
                    background: '#1a1a1a',
                    borderRadius: '15px',
                    padding: '15px'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />

                  <h3
                    style={{
                      color: 'white',
                      marginTop: '10px'
                    }}
                  >
                    {item.name}
                  </h3>

                  <p style={{ color: '#aaa' }}>
                    ₹{item.price}
                  </p>
                </div>
              ))}
            </div>

            <div
  style={{
    display: 'flex',
    gap: '12px',
    marginTop: '20px',
    flexWrap: 'wrap'
  }}
>
  <button
    onClick={() =>
      updateStatus(order._id, 'Approved')
    }
    className="ds-btn ds-btn--primary"
  >
    Approve
  </button>

  <button
    onClick={() =>
      updateStatus(order._id, 'Shipped')
    }
    className="ds-btn"
    style={{
      background: '#2563eb',
      color: 'white'
    }}
  >
    Ship
  </button>

  <button
    onClick={() =>
      updateStatus(order._id, 'Delivered')
    }
    className="ds-btn"
    style={{
      background: '#16a34a',
      color: 'white'
    }}
  >
    Deliver
  </button>

  <button
    onClick={() =>
      updateStatus(order._id, 'Cancelled')
    }
    className="ds-btn"
    style={{
      background: '#dc2626',
      color: 'white'
    }}
  >
    Cancel
  </button>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;