import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://dripsole.onrender.com';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getUser: () => api.get('/auth/user'),
};

// Products API
export const productsAPI = {
  getAll: (filters = {}) => {
    // filters can be { type: 'Shoes', category: 'men' }
    const params = new URLSearchParams(filters);
    return api.get(`/products?${params.toString()}`);
  },
  getById: (id) => api.get(`/products/${id}`),
  create: (productData) => api.post('/products', productData),
  update: (id, productData) => api.put(`/products/${id}`, productData),
  delete: (id) => api.delete(`/products/${id}`),
};

// Orders API
export const ordersAPI = {
  create: (orderData) => api.post('/orders', orderData),
  getUserOrders: () => api.get('/orders/user'),
  getAllOrders: (status) => api.get(`/orders/admin${status ? `?status=${status}` : ''}`),
  updateStatus: (id, statusData) => api.put(`/orders/${id}`, statusData),
  getById: (id) => api.get(`/orders/${id}`),
};

export default api;
