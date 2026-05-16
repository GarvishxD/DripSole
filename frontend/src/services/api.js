import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://dripsole.onrender.com',
});

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

export const authAPI = {

  register: (userData) =>
    api.post('/auth/register', userData),

  login: (credentials) =>
    api.post('/auth/login', credentials),

  getUser: () =>
    api.get('/auth/user'),
};

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