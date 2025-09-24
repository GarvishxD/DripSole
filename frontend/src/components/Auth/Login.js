import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token, data.user);
        navigate('/');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 20%, #334155 40%, #1e293b 60%, #0f172a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#1e293b',
        padding: '60px 50px',
        borderRadius: '25px',
        boxShadow: '0 25px 80px rgba(15, 23, 42, 0.6), 0 10px 40px rgba(212, 175, 55, 0.1)',
        border: '1px solid #334155',
        width: '100%',
        maxWidth: '450px',
        position: 'relative'
      }}>
        {/* Golden Top Accent */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '5px',
          background: 'linear-gradient(90deg, #d4af37, #f7d794, #d4af37)',
          borderRadius: '25px 25px 0 0',
          boxShadow: '0 0 15px rgba(212, 175, 55, 0.8)'
        }}></div>

        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          marginTop: '20px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(45deg, #f8fafc, #d4af37, #f8fafc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '10px'
          }}>
            Welcome Back
          </h1>
          <p style={{
            color: '#cbd5e1',
            fontSize: '1.1rem'
          }}>
            Sign in to your DripSole account
          </p>
        </div>

        {error && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#fecaca',
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '25px',
            textAlign: 'center',
            fontSize: '0.9rem'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              color: '#f8fafc',
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '8px',
              letterSpacing: '0.5px'
            }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '15px 20px',
                borderRadius: '15px',
                border: '2px solid #475569',
                background: 'rgba(51, 65, 85, 0.5)',
                color: '#f8fafc',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#d4af37';
                e.target.style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.3)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#475569';
                e.target.style.boxShadow = 'none';
              }}
              placeholder="Enter your email"
            />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              color: '#f8fafc',
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '8px',
              letterSpacing: '0.5px'
            }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '15px 20px',
                borderRadius: '15px',
                border: '2px solid #475569',
                background: 'rgba(51, 65, 85, 0.5)',
                color: '#f8fafc',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#d4af37';
                e.target.style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.3)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#475569';
                e.target.style.boxShadow = 'none';
              }}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: loading ? '#6b7280' : 'linear-gradient(135deg, #d4af37 0%, #f7d794 100%)',
              color: '#0f172a',
              border: 'none',
              padding: '18px 24px',
              borderRadius: '15px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '1.1rem',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
              marginBottom: '25px'
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.6)';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(0px)';
                e.target.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.4)';
              }
            }}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div style={{
          textAlign: 'center',
          marginTop: '20px'
        }}>
          <p style={{
            color: '#cbd5e1',
            fontSize: '1rem'
          }}>
            Don't have an account?{' '}
            <Link 
              to="/signup" 
              style={{
                color: '#d4af37',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#f7d794';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#d4af37';
              }}
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
