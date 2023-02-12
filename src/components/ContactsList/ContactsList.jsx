import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactsListItem from 'components/ContactsListItem';
import { selectVisibleContacts, selectLoading ,selectError} from 'redux/selectors';
import { getContactsThunk } from 'redux/contacts.thunk';

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
        {isLoading && !error ? (
          <p>Loading...</p>
        ) : (
          visibleContacts.map(({ id, name, phone }) => (
            <ContactsListItem key={id} id={id} name={name} number={phone} />
          ))
        )}
      </ul>
  );
};

export default ContactsList;
