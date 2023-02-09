import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: {
    login: null,
    password: null,
  },
  token: null,
  isFetchingUser: false,
  isLoggedIn: false,
  isPasswordForgotten: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.pending](state) {
      state.isFetchingUser = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.token = action.payload.token;
      state.user = {
        login: action.meta.arg.username,
        password: action.meta.arg.password,
      };
      state.isLoggedIn = true;
      state.isFetchingUser = false;
    },
    [authOperations.logIn.rejected](state, _) {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;
      state.isFetchingUser = false;
    },
    [authOperations.logOut.fulfilled](state, _) {
      state.user = {
        login: null,
        password: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.switchRestoreFlag.fulfilled](state, action) {
      state.isPasswordForgotten = action.payload;
    },
    [authOperations.switchRestoreFlag.rejected](state, _) {
      state.isPasswordForgotten = false;
    },
    [authOperations.restorePass.fulfilled](state, action) {
      state.isPasswordForgotten = action.payload.value;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      if (action.payload.detail === 'Invalid token') return;
      if (action.payload.message) {
        state.isLoggedIn = true;
        state.isFetchingUser = false;
      }
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingUser = false;
    },
  },
});

export default authSlice.reducer;
