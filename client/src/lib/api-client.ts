import Axios, { InternalAxiosRequestConfig } from 'axios';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json';
    config.headers['x-cg-demo-api-key'] = import.meta.env.VITE_GECKO_API_KEY;
  }

  config.withCredentials = true;
  return config;
}

export const api = Axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
        // handle unauthorized
    }

    return Promise.reject(error);
  },
);