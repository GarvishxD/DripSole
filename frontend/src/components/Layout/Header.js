import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const navStyle = {
  color: '#f8fafc',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '600'
};

const Header = () => {
  const { user, isAuthenticated, logout } =
    useAuth();

  const { totalItems } = useCart();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header
      style={{
        background: '#0f172a',
        padding: '20px 40px'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Link
          to="/"
          style={{
            color: '#d4b896',
            fontSize: '2rem',
            fontWeight: '800',
            textDecoration: 'none'
          }}
        >
          DripSole
        </Link>

        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '34px'
          }}
        >
          {!user?.isAdmin && (
            <>
              <Link to="/" style={navStyle}>
                👟 Shoes
              </Link>

              <Link
                to="/clothing"
                style={navStyle}
              >
                👕 Clothing
              </Link>

              <Link
                to="/accessories"
                style={navStyle}
              >
                👜 Accessories
              </Link>

              <Link
                to="/contact"
                style={navStyle}
              >
                📞 Contact
              </Link>

              <Link to="/cart" style={navStyle}>
                🛒 Cart ({totalItems})
              </Link>

              <Link to="/order" style={navStyle}>
                📦 My Orders
              </Link>
            </>
          )}

          {user?.isAdmin && (
            <Link
              to="/admin"
              style={{
                color: '#fff',
                textDecoration: 'none',
                background: '#7c3aed',
                padding: '10px 18px',
                borderRadius: '12px',
                fontWeight: '700'
              }}
            >
              👑 Admin Panel
            </Link>
          )}

          {isAuthenticated ? (
            <>
              <span style={{ color: '#fff' }}>
                Welcome, {user?.name}
              </span>

              <button
                onClick={handleLogout}
                style={{
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                style={navStyle}
              >
                Login
              </Link>

              <Link
                to="/signup"
                style={navStyle}
              >
                Signup
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;