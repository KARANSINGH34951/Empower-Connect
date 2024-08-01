import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Ensure the correct path to your userSlice

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
