import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid #334155'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      }}>
        {/* Logo */}
        <Link 
          to="/" 
          style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            textDecoration: 'none',
            background: 'linear-gradient(45deg, #d4af37, #f7d794, #d4af37)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '2px',
            textShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
            fontFamily: 'serif'
          }}
        >
          DripSole
        </Link>

        {/* Navigation Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px'
        }}>
          <Link 
            to="/" 
            style={{
              color: '#f8fafc',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '10px 20px',
              borderRadius: '25px',
              transition: 'all 0.3s ease',
              border: '2px solid transparent'
            }}
          >
            👟 Shoes
          </Link>

          <Link 
            to="/clothing" 
            style={{
              color: '#f8fafc',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '10px 20px',
              borderRadius: '25px',
              transition: 'all 0.3s ease',
              border: '2px solid transparent'
            }}
          >
            👕 Clothing
          </Link>

          <Link 
            to="/accessories" 
            style={{
              color: '#f8fafc',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '10px 20px',
              borderRadius: '25px',
              transition: 'all 0.3s ease',
              border: '2px solid transparent'
            }}
          >
            👜 Accessories
          </Link>

          <Link 
            to="/contact" 
            style={{
              color: '#f8fafc',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '10px 20px',
              borderRadius: '25px',
              transition: 'all 0.3s ease',
              border: '2px solid transparent'
            }}
          >
            📞 Contact Us
          </Link>

          {/* Authentication Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginLeft: '20px',
            paddingLeft: '20px',
            borderLeft: '1px solid #475569'
          }}>
            {isAuthenticated ? (
              <>
                <Link 
                  to="/order" 
                  style={{
                    color: '#f8fafc',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent'
                  }}
                >
                  🛒 My Orders
                </Link>

                {user?.isAdmin && (
                  <Link 
                    to="/admin" 
                    style={{
                      color: '#f8fafc',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: '600',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      transition: 'all 0.3s ease',
                      border: '2px solid #d4af37',
                      background: 'rgba(212, 175, 55, 0.1)'
                    }}
                  >
                    👑 Admin Panel
                  </Link>
                )}

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <span style={{
                    color: '#cbd5e1',
                    fontSize: '0.9rem'
                  }}>
                    Welcome, <span style={{ color: '#d4af37', fontWeight: '600' }}>{user?.name}</span>
                  </span>
                  <button 
                    onClick={handleLogout}
                    style={{
                      background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
                      color: '#f8fafc',
                      border: '2px solid #6b7280',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  style={{
                    background: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)',
                    color: '#f8fafc',
                    textDecoration: 'none',
                    padding: '12px 24px',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    border: '2px solid #d4af37',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Login
                </Link>

                <Link 
                  to="/signup" 
                  style={{
                    background: 'linear-gradient(135deg, #d4af37 0%, #f7d794 100%)',
                    color: '#0f172a',
                    textDecoration: 'none',
                    padding: '12px 24px',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    border: '2px solid #d4af37',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
