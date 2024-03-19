import AppReducer from '../reducers/AppReducer';
import { configureStore } from '@reduxjs/toolkit';

let store:any = configureStore({
  reducer: AppReducer
})

export type AppDispatch = typeof store.dispatch



export {
  store
};