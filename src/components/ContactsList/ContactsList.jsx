import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import ContactsListItem from 'components/ContactsListItem';
import {
  selectVisibleContacts,
  selectLoading,
  selectError,
} from 'redux/selectors';
import { getContactsThunk } from 'redux/contacts.thunk';
import { deleteContactByIdThunk } from 'redux/contacts.thunk';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './ContactsList.styled';
import Loader from 'components/Loader/Loader';

const ContactsList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <ul>
      {!isLoading && !error &&
        (visibleContacts.map(({ id, name, phone }) => (
          <ContactItem key={id}>
            <ContactName>
              {name[0].toUpperCase() + name.substring(1)} :
              <ContactNumber>{phone}</ContactNumber>
            </ContactName>
            <Button
              type="button"
              onClick={() => dispatch(deleteContactByIdThunk(id))}
            >
              Delete
            </Button>
          </ContactItem>)
        ))}
        {isLoading && <Loader/>}
        {error && <p>Something went wrong ...</p>}
    </ul>
  );
};

export default ContactsList;
