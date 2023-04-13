import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://cyberyal.com/',
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default apiClient;