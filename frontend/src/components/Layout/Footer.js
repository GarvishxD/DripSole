import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '20px 0',
      marginTop: '50px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <p>&copy; 2025 DripSole. All rights reserved.</p>
        <p style={{ fontSize: '14px', opacity: '0.8' }}>
          Premium shoes for the modern lifestyle
        </p>
      </div>
    </footer>
  );
};

export default Footer;
