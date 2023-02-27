import { createSlice } from '@reduxjs/toolkit';
import { State } from 'react-native-gesture-handler';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    login: null,
    stateChange: null,
  },
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      login: payload.login,
    }),
    authStateChange: (state, { payload }) => ({ ...state, stateChange: payload.stateChange }),
  },
});

console.log('authSlice', authSlice);
