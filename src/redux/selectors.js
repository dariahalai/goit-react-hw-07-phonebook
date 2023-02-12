import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectLoading = state => state.isLoading;
export const selectError = state => state.error;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  }
);
