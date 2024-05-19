// axios.config.js
import axios from "axios";

// Create an Axios instance
const axiosInstance = axios;

// Configure Axios instance
axiosInstance.defaults.baseURL =
  process.env.API_BASE_URL || "http://localhost:8080/api";

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any additional headers or data transformations here
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses here
    return response;
  },
  (error) => {
    // Handle error responses here
    return Promise.reject(error);
  },
);

export default axiosInstance;
