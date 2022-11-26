import axios from 'axios';

const cookie = document.cookie

export const authAxios = axios.create({
  headers: {
    withCredentials: true,
    authorization: `Bearer ${cookie}`
  },
  credentials: 'same-origin'
});

export { default as userActions } from './userActions';