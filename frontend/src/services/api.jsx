import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000', // Update with your backend URL when deployed
});

// Auth APIs
export const registerUser = (userData) => API.post('/api/auth/register', userData);
export const loginUser = (userData) => API.post('/api/auth/login', userData);

// Alert APIs
export const postAlert = (alertMessage) => {
  const token = localStorage.getItem('token');
  return API.post(
    '/api/alerts/alert',
    { alertMessage },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const fetchAlerts = () => {
  const token = localStorage.getItem('token');
  return API.get('/api/alerts', { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
};
