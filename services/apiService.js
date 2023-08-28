import axios from 'axios';

const authToken = localStorage.getItem('authToken'); 

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL ? process.env.API_BASE_URL.replace("https", "http") : "http://localhost:8000/api", // Replace with your Laravel API URL
  headers: {
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json', 
  },
});


export const get = (url) => apiClient.get(url);
export const post = (url, data) => apiClient.post(url, data);
export const put = (url, data) => apiClient.put(url, data);
export const del = (url) => apiClient.delete(url);

export default apiClient;