import React, { useState, useEffect } from 'react';

const Cart = ({ onUpdateCart, onCheckout }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    const updatedCart = cart.map(item =>
      item.productId === productId
        ? { ...item, quantity: newQuantity }
        : item
    );
    
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    if (onUpdateCart) onUpdateCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.productId !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    if (onUpdateCart) onUpdateCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const handleSizeChange = (productId, newSize) => {
    const updatedCart = cart.map(item =>
      item.productId === productId
        ? { ...item, size: newSize }
        : item
    );
    
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart</h2>
        <p className="text-center text-muted">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart ({cart.length} items)</h2>
      
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.productId} className="cart-item">
            <img
              src={`http://localhost:5000/images/products/${item.image}`}
              alt={item.name}
              className="cart-item-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/80x80/667eea/white?text=Shoe';
              }}
            />
            <div className="cart-item-details">
              <h4 className="cart-item-name">{item.name}</h4>
              <p className="cart-item-price">${item.price} each</p>
              <div className="size-selector">
                <label htmlFor={`size-${item.productId}`}>Size: </label>
                <select
                  id={`size-${item.productId}`}
                  value={item.size}
                  onChange={(e) => handleSizeChange(item.productId, e.target.value)}
                  className="form-select"
                  style={{ width: 'auto', display: 'inline-block', marginLeft: '5px' }}
                >
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
            </div>
            <div className="quantity-controls">
              <button
                className="quantity-btn"
                onClick={() => updateQuantity(item.productId, item.quantity - 1)}
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button
                className="quantity-btn"
                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="cart-item-total">
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(item.productId)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="d-flex justify-content-between align-items-center">
          <h3>Total: ${calculateTotal()}</h3>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => onCheckout && onCheckout(cart)}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
