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

  (error) => {

    return Promise.reject(error);
  }
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

  getAll: () =>
    api.get('/products'),

  getById: (id) =>
    api.get(`/products/${id}`),
};

// ================= ORDERS =================

export const ordersAPI = {

  create: (data) =>
    api.post('/orders', data),

  getUserOrders: () =>
    api.get('/orders'),
};

export default api;