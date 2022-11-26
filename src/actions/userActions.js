import axios from 'axios';
import { authAxios } from '.';
import { User } from '../classes';

const actions = {
  sendToken: async () => {
    try {
      const req = await authAxios.get('/api/v2/users/actions/login');
      const res = await req.data;
    console.log('responce', res)
      if (res.status) {
        const { UserId, FullName, UserName, Email, Admin, Friends, Requests, Groups, Posts } = res.data;
        const user = new User(UserId, FullName, UserName, Email, Admin);
        user.friends = Friends;
        user.requests = Requests;
        user.groups = Groups;
        user.posts = Posts;
        console.log('return' ,{ status: res.status, data: user })
        return { status: res.status, data: user }
      } else {
        return res
      }
    } catch (error) {
      console.log(error)
    }
  },
  sendTokenCompleted: (data) => ({
    type: 'SEND_TOKEN_COMPLETED',
    payload: data
  }),
  signup: async (object) => {
    const req = await axios.post('/api/v2/users/actions/signup', object)
    const data = await req.data
    return data
  },
  signupCompleted: (data) => ({
    type: 'SIGNUP_COMPLETED',
    payload: data
  }),
  login: async (object) => {
    const req = await authAxios.post('/api/v2/users/actions/login', object)
    const res = await req.data;
    console.log('responce', res)
    if (!res.result) {
      return res
    } else {
      const { UserId, FullName, UserName, Email, Admin, Friends, Requests, Groups, Posts } = res.user;
      const user = new User(UserId, FullName, UserName, Email, Admin);
      user.friends = Friends;
      user.requests = Requests;
      user.groups = Groups;
      user.posts = Posts;

      const data = {
        result: res.result,
        message: res.message,
        user,
      }
      return data
    }
  },
  loginCompleted: (data) => ({
    type: 'LOGIN_COMPLETED',
    payload: data
  }),
  logout: async () => {
    const req = await axios.get('/api/v2/users/actions/logout')
    const data = await req.data
    return data
  },
  logoutCompleted: (data) => ({
    type: 'LOGOUT_COMPLETED',
    payload: data
  }),
};

export default actions;
