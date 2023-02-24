import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

export const changeAuth = createAction('isAuth/increment');

const myReducer = createReducer(false, {
  [changeAuth]: (state, action) => (state = action.payload),
});

export const store = configureStore({
  reducer: {
    isAuth: myReducer,
  },
});
