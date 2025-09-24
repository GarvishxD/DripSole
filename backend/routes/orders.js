const express = require('express');
const router = express.Router();
const { 
  createOrder, 
  getUserOrders, 
  getAllOrders, 
  updateOrderStatus,
  getOrderById 
} = require('../controllers/orderController');
const auth = require('../middleware/auth');
const { adminAuth } = require('../middleware/auth');

// @route   POST /api/orders
// @desc    Create new order
// @access  Private
router.post('/', auth, createOrder);

// @route   GET /api/orders/user
// @desc    Get current user's orders
// @access  Private
router.get('/user', auth, getUserOrders);

// @route   GET /api/orders/admin
// @desc    Get all orders (admin only)
// @access  Private (Admin)
router.get('/admin', [auth, adminAuth], getAllOrders);

// @route   GET /api/orders/:id
// @desc    Get order by ID
// @access  Private
router.get('/:id', auth, getOrderById);

// @route   PUT /api/orders/:id
// @desc    Update order status (admin only)
// @access  Private (Admin)
router.put('/:id', [auth, adminAuth], updateOrderStatus);

module.exports = router;
