import axios from 'axios';

// Base Axios instance with default configuration
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Automatically attach token or other headers if needed in future
API.interceptors.request.use(
  (config) => {
    // Example: Add auth token if stored
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// --- Auth APIs ---
export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);

// --- Transaction APIs ---
export const createTransaction = (data) => API.post('/transaction', data);
export const getTransactions = (email) => API.get(`/transaction/${email}`);
export const getBalance = (upi_id) => API.get(`/transaction/balance/${upi_id}`);

export default API;
