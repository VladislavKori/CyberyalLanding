import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://cyberyal.com/',
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default apiClient;