import { createSlice } from '@reduxjs/toolkit';
import { State } from 'react-native-gesture-handler';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    nickname: null,
  },
  reducers: {
    updateUserProfile: (state, { payload }) => ({ ...state, userId: payload.userId }),
  },
});

console.log('authSlice', authSlice);
