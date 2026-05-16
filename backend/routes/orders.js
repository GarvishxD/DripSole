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

router.post('/', auth, createOrder);

router.get('/user', auth, getUserOrders);

router.get('/admin', [auth, adminAuth], getAllOrders);

router.get('/:id', auth, getOrderById);

router.put('/:id', [auth, adminAuth], updateOrderStatus);

module.exports = router;