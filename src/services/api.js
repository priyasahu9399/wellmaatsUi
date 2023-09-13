import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {getUniqueId} from 'react-native-device-info';

export const baseURL = 'https://easysolution.backends.booksica.in/api';
export const http2 = 'https://satyakabirbucket.ap-south-1.linodeobjects.com/';
// export const http3 = 'https://tranmuzi.ofertasya.net/user/gallery/'
// export const http4 = 'https://tranmuzi.ofertasya.net/user/gallery/video/'

const http = axios.create({
  baseURL: 'https://easysolution.backends.booksica.in/api',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // ApiToken: 'U0RvR2x0SEZYa0ljSzgxUkFCUHZpRUpvREFlb0FuTFBPSFA=',
  },
});
http.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@USER_TOKEN');
    // const signup_token = await AsyncStorage.getItem('@SIGNUP_TOKEN');
    // if(signup_token) config.headers.Authorization = `Bearer ${signup_token}`;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
export default http;
