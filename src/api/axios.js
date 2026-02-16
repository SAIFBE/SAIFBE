import axios from 'axios';

let memoryToken = null;

export const setAccessToken = (token) => {
  memoryToken = token;
};

export const clearAccessToken = () => {
  memoryToken = null;
};

export const apiClient = axios.create({
  baseURL: '/api',
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  if (memoryToken) {
    config.headers.Authorization = `Bearer ${memoryToken}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearAccessToken();
    }
    return Promise.reject(error);
  },
);
