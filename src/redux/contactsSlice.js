import { createSlice } from '@reduxjs/toolkit';

export const contactsInitState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter:''
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addNewContacts: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteIdContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    filterContacts: (state, { payload }) => {
      state.filter = payload;
   },
  },
});

export const { addNewContacts, deleteIdContact ,filterContacts} = contactsSlice.actions;
export const rootReducer = contactsSlice.reducer;
