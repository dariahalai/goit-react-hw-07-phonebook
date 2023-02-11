import { configureStore } from '@reduxjs/toolkit';
import { contactsInitState, rootReducer } from './contactsSlice';
// import { filterInitState, filterReducer } from './filterSlice';


export const initState = contactsInitState;


export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer:rootReducer
 
  
});

