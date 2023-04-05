import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default apiClient;