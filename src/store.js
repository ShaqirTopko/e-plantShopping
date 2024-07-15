import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreatSlice';

// Konfigurimi i Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Eksporto Redux store
export default store;