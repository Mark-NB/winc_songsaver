import { configureStore } from '@reduxjs/toolkit';
import songReducer from '../features/song/songSlice'
import aboutAppReducer from '../features/about_app/aboutAppSlice'

export const store = configureStore({
  reducer: {
    song: songReducer,
    about: aboutAppReducer
  },
});