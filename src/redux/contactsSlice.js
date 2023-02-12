import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

 const contactsInitState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addNewContacts: (state, { payload }) => {
      const newContact = {
        id: nanoid(),
        ...payload,
      };
      state.contacts.some(({ name }) => name === payload.name)
      ? Notify(`${newContact.name} is already in contacts.`)
      : state.contacts.push(newContact);
    },
    deleteIdContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload);
    },
  },
});

export const { addNewContacts, deleteIdContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
