import React, { useState } from 'react';

import {
  Link,
  useNavigate,
  useLocation
} from 'react-router-dom';

import { useAuth }
  from '../../context/AuthContext';

import { useCart }
  from '../../context/CartContext';

import {
  shoesProducts,
  clothingProducts
} from '../../utils/productImages';

import { accessoriesProducts }
  from '../../utils/accessoriesData';

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

  const location = useLocation();

  const [search, setSearch] =
    useState('');

  const allProducts = [
    ...shoesProducts,
    ...clothingProducts,
    ...accessoriesProducts
  ];

  const filteredSearch =
    search.length > 0
      ? allProducts.filter((item) =>
          item.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
        )
      : [];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (

    <header
      style={{
        background: '#0f172a',
        padding: '20px 40px',
        position: 'sticky',
        top: 0,
        zIndex: 999
      }}
    >

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '30px'
        }}
      >

        <Link
          to="/"
          style={{
            color: '#d4b896',
            fontSize: '2rem',
            fontWeight: '800',
            textDecoration: 'none',
            whiteSpace: 'nowrap'
          }}
        >
          DripSole
        </Link>

        {(
          location.pathname === '/' ||
          location.pathname === '/clothing' ||
          location.pathname === '/accessories'
        ) && (

          <div className="ds-search-wrapper">

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="ds-search-input"
            />

            {search.length > 0 && (

              <div className="ds-search-dropdown">

                {filteredSearch.length > 0 ? (

                  filteredSearch
                    .slice(0, 8)
                    .map((product) => (

                      <div
                        key={product._id}
                        className="ds-search-item"
                        onClick={() => {

                          navigate('/product', {
                            state: { product }
                          });

                          setSearch('');

                        }}
                      >

                        <img
                          src={product.image}
                          alt={product.name}
                        />

                        <div>

                          <h4>
                            {product.name}
                          </h4>

                          <p>
                            ₹{product.price}
                          </p>

                        </div>

                      </div>

                    ))

                ) : (

                  <div className="ds-no-results">
                    No products found
                  </div>

                )}

              </div>

            )}

          </div>

        )}

        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap'
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

              <Link
                to="/cart"
                style={navStyle}
              >
                🛒 Cart ({totalItems})
              </Link>

              <Link
                to="/order"
                style={navStyle}
              >
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

              <span
                style={{
                  color: '#fff'
                }}
              >
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

      </div>

    </header>

  );
};

export default Header;