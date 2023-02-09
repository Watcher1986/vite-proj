import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const BASE_URL = import.meta.env.VITE_BASE_URL;

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Token ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// if we ever register partners:
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('Something went wrong while registering. Please try again later');
    console.log(error);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/api/login/', credentials);
    token.set(data.token);
    toast.success('Login Successful! 🚀', {
      duration: 3000,
      icon: '📝',
    });
    return data;
  } catch (error) {
    toast.error('Something went wrong while logging in. Please try again later');
    console.log(error);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/api/logout/');
    token.unset();
  } catch (error) {
    toast.error('Something went wrong while logging out. Please try again later');
    console.log(error);
  }
});

const switchRestoreFlag = createAsyncThunk('auth/forget', async value => {
  try {
    return value;
  } catch (error) {
    toast.error('Something went wrong while restoring password. Please try again later');
    console.log(error);
  }
});

const restorePass = createAsyncThunk('auth/restore', async value => {
  try {
    await axios.post('/users/restore', value);
    toast.success('Instructions are sent to the provided email! 🚀', {
      duration: 3000,
      icon: '📝',
    });
    return value;
  } catch (error) {
    toast.error('Something went wrong while restoring password. Please try again later');
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get('/check/');
    return data;
  } catch (error) {
    token.unset();
    console.log(error);
  }
});

const operations = {
  register,
  logOut,
  logIn,
  restorePass,
  fetchCurrentUser,
  switchRestoreFlag,
};

export default operations;
