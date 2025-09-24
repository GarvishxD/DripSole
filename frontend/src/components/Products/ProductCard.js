import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-card fade-in">
      <img
        src={`http://localhost:5000/images/products/${product.image}`}
        alt={product.name}
        className="product-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x220/667eea/white?text=DripSole';
        }}
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
      {product.sizes && product.sizes.length > 0 && (
        <div className="product-sizes mb-2">
          <small className="text-muted">
            Available sizes: {product.sizes.join(', ')}
          </small>
        </div>
      )}
      <button
        className="btn btn-primary w-100"
        onClick={handleAddToCart}
        disabled={!product.inStock}
      >
        {product.inStock ? 'Select / View' : 'Out of Stock'}
      </button>
    </div>
  );
};

export default ProductCard;
