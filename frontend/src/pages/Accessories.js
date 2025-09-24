import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      marginBottom: '40px'
    }}>
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          style={{
            background: selectedCategory === category.id 
              ? 'linear-gradient(135deg, #d4af37 0%, #f7d794 100%)' 
              : 'linear-gradient(135deg, #334155 0%, #1e293b 100%)',
            color: selectedCategory === category.id ? '#0f172a' : '#f8fafc',
            border: `2px solid ${selectedCategory === category.id ? '#d4af37' : '#334155'}`,
            padding: '12px 24px',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span style={{ fontSize: '18px' }}>{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
};

const Accessories = () => {
  const navigate = useNavigate();
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Accessories', icon: '👜' },
    { id: 'men', name: 'Men', icon: '👨' },
    { id: 'women', name: 'Women', icon: '👩' },
    { id: 'children', name: 'Children', icon: '🧒' }
  ];

  useEffect(() => {
    loadAccessories();
  }, [selectedCategory]);

  const loadAccessories = async () => {
    setLoading(true);
    try {
      const url = selectedCategory === 'all' 
        ? 'http://localhost:5000/api/accessories' 
        : `http://localhost:5000/api/accessories?category=${selectedCategory}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      setAccessories(data);
      setError('');
    } catch (err) {
      console.error('Error loading accessories:', err);
      setError('Unable to connect to our accessories collection');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  if (loading) return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
    }}>
      <div style={{ textAlign: 'center', color: '#d4af37' }}>
        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👜</div>
        <div>Loading accessories...</div>
      </div>
    </div>
  );

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 20%, #334155 40%, #1e293b 60%, #0f172a 100%)',
      paddingBottom: '60px'
    }}>
      {/* Hero Section */}
      <div style={{ 
        textAlign: 'center', 
        padding: '120px 20px',
        background: `
          linear-gradient(rgba(15, 23, 42, 0.75), rgba(30, 41, 59, 0.8)), 
          url('https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1920&h=800&fit=crop&crop=center') center/cover no-repeat
        `,
        color: 'white',
        marginBottom: '80px',
        position: 'relative',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ position: 'relative', zIndex: '2', maxWidth: '900px' }}>
          <h1 style={{ 
            fontSize: '6rem', 
            fontWeight: '800',
            marginBottom: '40px',
            background: 'linear-gradient(45deg, #ffffff 0%, #d4af37 50%, #f7d794 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'serif'
          }}>
            Luxury Accessories
          </h1>
          <p style={{ 
            fontSize: '1.8rem', 
            maxWidth: '750px',
            margin: '0 auto',
            color: '#f1f5f9'
          }}>
            Exquisite accessories that add the perfect finishing touch to your style
          </p>
        </div>
      </div>

      {/* Accessories Section */}
      <div style={{
        padding: '0 40px',
        maxWidth: '1600px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            background: 'linear-gradient(45deg, #f8fafc, #d4af37, #f8fafc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px'
          }}>
            Signature Collection
          </h2>
          
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <div style={{
            fontSize: '1.1rem',
            color: '#cbd5e1',
            marginBottom: '20px'
          }}>
            Showing {accessories.length} accessories
          </div>
        </div>

        {/* Accessories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(370px, 1fr))',
          gap: '40px'
        }}>
          {accessories.map(item => (
            <div 
              key={item._id} 
              style={{ 
                backgroundColor: '#1e293b',
                borderRadius: '25px',
                padding: '35px',
                boxShadow: '0 20px 60px rgba(15, 23, 42, 0.6)',
                border: '1px solid #334155',
                transition: 'all 0.5s ease',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                background: 'linear-gradient(135deg, #d4af37 0%, #f7d794 100%)',
                color: '#0f172a',
                padding: '6px 12px',
                borderRadius: '15px',
                fontSize: '12px',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}>
                {item.category}
              </div>

              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(51, 65, 85, 0.8)',
                color: '#cbd5e1',
                padding: '6px 12px',
                borderRadius: '15px',
                fontSize: '11px',
                fontWeight: '500',
                textTransform: 'uppercase'
              }}>
                {item.subCategory}
              </div>

              <div style={{ 
                marginBottom: '30px',
                overflow: 'hidden',
                borderRadius: '20px',
                marginTop: '35px'
              }}>
                <img 
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                    borderRadius: '20px'
                  }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/334155/d4af37?text=DripSole';
                  }}
                />
              </div>
              
              <h3 style={{ 
                color: '#f8fafc', 
                marginBottom: '18px',
                fontSize: '1.6rem',
                fontWeight: '700'
              }}>
                {item.name}
              </h3>
              
              <div style={{ 
                fontSize: '2.2rem',
                fontWeight: '700',
                marginBottom: '22px',
                color: '#f1f5f9'
              }}>
                <span style={{ fontSize: '1.8rem', color: '#cbd5e1', marginRight: '6px' }}>₹</span>
                {item.price.toLocaleString('en-IN')}
              </div>
              
              <p style={{ 
                color: '#cbd5e1', 
                fontSize: '1.1rem',
                marginBottom: '20px',
                lineHeight: '1.7'
              }}>
                {item.description}
              </p>

              <div style={{ marginBottom: '25px' }}>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#94a3b8',
                  marginBottom: '8px',
                  textTransform: 'uppercase'
                }}>
                  Available Options:
                </div>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap'
                }}>
                  {item.sizes && item.sizes.map(size => (
                    <span key={size} style={{
                      background: 'rgba(51, 65, 85, 0.5)',
                      color: '#cbd5e1',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      border: '1px solid #475569'
                    }}>
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => navigate(`/product/${item._id}`)}
                style={{
                  background: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)',
                  color: '#f8fafc',
                  border: '2px solid #d4af37',
                  padding: '18px 35px',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  width: '100%',
                  fontSize: '17px',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  transition: 'all 0.4s ease'
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {accessories.length === 0 && !loading && (
          <div style={{
            textAlign: 'center',
            padding: '80px 20px',
            color: '#cbd5e1'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>👜</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#f8fafc' }}>
              No accessories found
            </h3>
            <p>Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accessories;
