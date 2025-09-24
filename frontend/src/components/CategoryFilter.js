import React from 'react';

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
            letterSpacing: '0.5px',
            transition: 'all 0.3s ease',
            boxShadow: selectedCategory === category.id 
              ? '0 8px 25px rgba(212, 175, 55, 0.3)' 
              : '0 4px 15px rgba(51, 65, 85, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => {
            if (selectedCategory !== category.id) {
              e.target.style.borderColor = '#d4af37';
              e.target.style.transform = 'translateY(-2px)';
            }
          }}
          onMouseLeave={(e) => {
            if (selectedCategory !== category.id) {
              e.target.style.borderColor = '#334155';
              e.target.style.transform = 'translateY(0px)';
            }
          }}
        >
          <span style={{ fontSize: '18px' }}>{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
