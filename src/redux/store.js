// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../../src/redux/features/user/userSlice"
import swapReducer from "../../src/redux/features/swap/swapSlice"


export const store = configureStore({
  reducer: {
    user: userReducer,
    swap: swapReducer,
  },
});
