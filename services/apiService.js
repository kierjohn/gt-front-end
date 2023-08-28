// services/apiService.js
import axios from 'axios';

const authToken = localStorage.getItem('authToken'); // Get token from localStorage

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL ? process.env.API_BASE_URL.replace("https", "http") : "http://localhost:8000/api", // Replace with your Laravel API URL
  headers: {
    // Add default headers here
    'Authorization': `Bearer ${authToken}`, // Example: include the authorization token
    'Content-Type': 'application/json', // Example: set content type
  },
});


export const get = (url) => apiClient.get(url);
export const post = (url, data) => apiClient.post(url, data);
export const put = (url, data) => apiClient.put(url, data);
export const del = (url) => apiClient.delete(url);

export default apiClient;