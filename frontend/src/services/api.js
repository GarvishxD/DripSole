import axios from 'axios';

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
});

// ================= TOKEN =================

api.interceptors.request.use(
  (config) => {

    const token =
      localStorage.getItem('token');

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
);

// ================= AUTH =================

export const authAPI = {

  register: (userData) =>
    api.post('/auth/register', userData),

  login: (credentials) =>
    api.post('/auth/login', credentials),

  getUser: () =>
    api.get('/auth/user'),
};

// ================= PRODUCTS =================

export const productsAPI = {

  getAll: (filters = {}) => {

    const params =
      new URLSearchParams(filters);

    return api.get(
      `/products?${params.toString()}`
    );
  },

  getById: (id) =>
    api.get(`/products/${id}`),
};

// ================= ORDERS =================

export const ordersAPI = {

  create: (orderData) =>
    api.post('/orders', orderData),

  getUserOrders: () =>
    api.get('/orders'),

  getAllOrders: () =>
    api.get('/admin/orders'),

  updateStatus: (id, statusData) =>
    api.put(
      `/admin/orders/${id}`,
      statusData
    ),
};

export default api;