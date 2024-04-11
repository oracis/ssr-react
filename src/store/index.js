import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './slice/homeSlice';
import personalReducer from './slice/personalSlice';

function createStoreInstance(preloadedState = {}) {
  return configureStore({
    reducer: {
      home: homeReducer,
      personal: personalReducer,
    },
    preloadedState,
  });
}

export default createStoreInstance;
