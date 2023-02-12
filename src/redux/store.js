import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  devTools: true,
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
