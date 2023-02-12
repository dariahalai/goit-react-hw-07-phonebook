
export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter;

export const getContacts = (state) => state.contacts.contacts;
export const getFilter = (state) => state.filter;

export const getVisibleContacts = (state) => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
};