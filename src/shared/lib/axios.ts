import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://api.example.com', // Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
