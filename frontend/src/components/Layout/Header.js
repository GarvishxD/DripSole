import React, { useState, useEffect } from 'react';

import {
  Link,
  useNavigate,
  useLocation
} from 'react-router-dom';

import {
  Menu,
  X
} from 'lucide-react';

import { useAuth }
from '../../context/AuthContext';

import { useCart }
from '../../context/CartContext';

const navStyle = {
  color: '#f8fafc',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '600'
};

const mobileNavStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: '600'
};

const Header = () => {

  const {
    user,
    isAuthenticated,
    logout
  } = useAuth();

  const { totalItems } = useCart();

  const navigate = useNavigate();

  const location = useLocation();

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [isMobile, setIsMobile] =
    useState(window.innerWidth <= 768);

  // ================= RESPONSIVE =================

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener(
      'resize',
      handleResize
    );

    return () =>
      window.removeEventListener(
        'resize',
        handleResize
      );

  }, []);

  // ================= HIDE NAVBAR =================

  const hiddenRoutes = [
    '/login',
    '/signup'
  ];

  if (
    hiddenRoutes.includes(location.pathname)
  ) {
    return null;
  }

  // ================= LOGOUT =================

  const handleLogout = () => {

    logout();

    navigate('/');

    setMobileMenu(false);
  };

  return (

    <header
      style={{
        background: '#0f172a',
        padding: isMobile
          ? '16px 18px'
          : '18px 40px',

        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow:
          '0 4px 20px rgba(0,0,0,0.25)'
      }}
    >

     <div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '15px'
  }}
>

        {/* ================= LOGO ================= */}


        <Link
          to="/"
          style={{
            color: '#f4d35e',
            fontSize: isMobile
              ? '1.7rem'
              : '2rem',

            fontWeight: '800',
            textDecoration: 'none',
            letterSpacing: '1px'
          }}
        >
          DripSole
        </Link>

        {/* ================= DESKTOP NAV ================= */}

        {!isMobile && (

          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '22px'
            }}
          >

            {!user?.isAdmin && (
              <>

                <Link
                  to="/"
                  style={navStyle}
                >
                  Shoes
                </Link>

                <Link
                  to="/clothing"
                  style={navStyle}
                >
                  Clothing
                </Link>

                <Link
                  to="/accessories"
                  style={navStyle}
                >
                  Accessories
                </Link>

                <Link
                  to="/contact"
                  style={navStyle}
                >
                  Contact
                </Link>

                <Link
                  to="/cart"
                  style={navStyle}
                >
                  Cart ({totalItems})
                </Link>

                <Link
                  to="/order"
                  style={navStyle}
                >
                  Orders
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
                Admin Panel
              </Link>

            )}

            {isAuthenticated ? (
              <>

                <span
                  style={{
                    color: '#fff',
                    fontWeight: '600'
                  }}
                >
                  {user?.name}
                </span>

                <button
                  onClick={handleLogout}
                  style={{
                    background: '#ef4444',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 16px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: '700'
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

        )}

                {/* ================= LEFT MOBILE MENU ================= */}

        {isMobile && (

          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              order: -1
            }}
          >
            {mobileMenu ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        )}

      </div>

          {/* ================= MOBILE SIDEBAR ================= */}

      {mobileMenu && isMobile && (

        <>

          {/* OVERLAY */}

          <div
            onClick={() =>
              setMobileMenu(false)
            }
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background:
                'rgba(0,0,0,0.55)',
              zIndex: 1500
            }}
          />

          {/* SIDEBAR */}

          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '78%',
              maxWidth: '320px',
              height: '100vh',
              background:
  'linear-gradient(180deg,#111827,#1f2937)',
              padding: '22px',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 2000,
              boxShadow:
  '5px 0 25px rgba(0,0,0,0.25)',
              overflowY: 'auto'
            }}
          >

            {/* TOP */}

            <div
              style={{
                display: 'flex',
                justifyContent:
                  'space-between',
                alignItems: 'center',
                marginBottom: '28px'
              }}
            >

              <h2
                style={{
                  margin: 0,
                  color: '#fff',
                  fontSize: '1.5rem',
                  fontWeight: '800'
                }}
              >
                DripSole
              </h2>

              <button
                onClick={() =>
                  setMobileMenu(false)
                }
                style={{
                  background: '#f3f4f6',
                  border: 'none',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <X
                  size={24}
                  color="#111827"
                />
              </button>

            </div>

            {/* USER SECTION */}

            {isAuthenticated && (

              <div
                style={{
                  background:
  'rgba(255,255,255,0.12)',
                  padding: '16px',
                  borderRadius: '16px',
                  marginBottom: '25px'
                }}
              >

                <p
                  style={{
                    margin: 0,
                    color: '#6b7280',
                    fontSize: '0.9rem'
                  }}
                >
                  Welcome
                </p>

                <h3
                  style={{
                    margin:
                      '6px 0 0 0',
                    color: '#fff'
                  }}
                >
                  {user?.name}
                </h3>

              </div>

            )}

            {/* NAVIGATION */}

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >

              <Link
                to="/"
                onClick={() =>
                  setMobileMenu(false)
                }
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '1rem',
                  padding: '14px',
                  borderRadius: '14px',
                  background:
  'rgba(255,255,255,0.12)'
                }}
              >
                👟 Shoes
              </Link>

              <Link
                to="/clothing"
                onClick={() =>
                  setMobileMenu(false)
                }
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '1rem',
                  padding: '14px',
                  borderRadius: '14px',
                  background:
  'rgba(255,255,255,0.12)'
                }}
              >
                👕 Clothing
              </Link>

              <Link
                to="/accessories"
                onClick={() =>
                  setMobileMenu(false)
                }
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '1rem',
                  padding: '14px',
                  borderRadius: '14px',
                  background:
  'rgba(255,255,255,0.12)'
                }}
              >
                👜 Accessories
              </Link>

              <Link
                to="/cart"
                onClick={() =>
                  setMobileMenu(false)
                }
                style={{
  textDecoration: 'none',

  color: '#111827',

  fontWeight: '700',

  fontSize: '1rem',

  padding: '14px',

  borderRadius: '14px',

  background:
    'rgba(255,255,255,0.92)',

  border:
    '1px solid rgba(0,0,0,0.08)',

  transition: '0.3s ease'
}}
              >
                🛒 Cart ({totalItems})
              </Link>

              <Link
                to="/order"
                onClick={() =>
                  setMobileMenu(false)
                }
                style={{
  textDecoration: 'none',

  color: '#111827',

  fontWeight: '700',

  fontSize: '1rem',

  padding: '14px',

  borderRadius: '14px',

  background:
    'rgba(255,255,255,0.92)',

  border:
    '1px solid rgba(0,0,0,0.08)',

  transition: '0.3s ease'
}}
              >
                📦 Orders
              </Link>

            </div>

                        {/* AUTH */}

            <div
              style={{
                marginTop: 'auto',
                paddingTop: '25px'
              }}
            >

              {isAuthenticated ? (

                <button
                  onClick={handleLogout}
                  style={{
                    width: '100%',
                    background: '#ef4444',
                    color: '#fff',
                    border: 'none',
                    padding: '15px',
                    borderRadius: '14px',
                    fontWeight: '700',
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}
                >
                  Logout
                </button>

              ) : (

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >

                  <Link
                    to="/login"
                    onClick={() =>
                      setMobileMenu(false)
                    }
                    style={{
                      textDecoration: 'none',
                      textAlign: 'center',
                      background: '#111827',
                      color: '#fff',
                      padding: '15px',
                      borderRadius: '14px',
                      fontWeight: '700'
                    }}
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    onClick={() =>
                      setMobileMenu(false)
                    }
                    style={{
                      textDecoration: 'none',
                      textAlign: 'center',
                      background: '#f3f4f6',
                      color: '#fff',
                      padding: '15px',
                      borderRadius: '14px',
                      fontWeight: '700'
                    }}
                  >
                    Signup
                  </Link>

                </div>

              )}

            </div>

          </div>

        </>

      )}
          </header>
  );
};

export default Header;