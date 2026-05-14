import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminOrders from './AdminOrders';

const AdminDashboard = () => {
  const userInfo = JSON.parse(
    localStorage.getItem('user')
  );

  if (!userInfo?.isAdmin) {
    return <Navigate to="/" />;
  }

  return <AdminOrders />;
};

export default AdminDashboard;