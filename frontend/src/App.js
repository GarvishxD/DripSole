import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import Header from './components/Layout/Header';
import BackToTop from './components/Layout/BackToTop';
import Home from './pages/Home';
import Clothing from './pages/Clothing';
import Accessories from './pages/Accessories';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import OrderPage from './pages/OrderPage';
import AdminPanel from './pages/AdminPanel';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import './App.css';
import AdminOrders from './pages/AdminOrders';
import AdminDashboard from './pages/AdminDashboard';
function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <CartProvider>
          <Router>
            <div className="App ds-app-shell">
              <Header />
              <main className="main-content ds-main">
                <Routes>
  
                  <Route path="/" element={<Home />} />
                  <Route path="/clothing" element={<Clothing />} />
                  <Route path="/accessories" element={<Accessories />} />
                 <Route
  path="/product"
  element={<ProductDetail />}
/>
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/order" element={<OrderPage />} />
                  <Route path="/admin-orders" element={<AdminOrders />} />
                  <Route path="/admin" element={<AdminPanel />} />
                  
                  <Route
  path="/admin"
  element={<AdminDashboard />}
/>
                </Routes>
              </main>
              <BackToTop />
            </div>
          </Router>
        </CartProvider>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
