import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, selectedSize, quantity) => {
    const existingItem = cartItems.find(
      item => item._id === product._id && item.selectedSize === selectedSize
    );

    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item._id === product._id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          selectedSize,
          quantity
        }
      ]);
    }
  };

  const removeFromCart = (id, size) => {
    setCartItems(
      cartItems.filter(
        item => !(item._id === id && item.selectedSize === size)
      )
    );
  };

  const updateQuantity = (id, size, quantity) => {
    if (quantity < 1) return;

    setCartItems(
      cartItems.map(item =>
        item._id === id && item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};