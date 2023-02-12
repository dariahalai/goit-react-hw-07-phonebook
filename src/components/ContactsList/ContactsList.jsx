import { useSelector } from 'react-redux';
import ContactsListItem from 'components/ContactsListItem';
import { getVisibleContacts} from 'redux/selectors';

const ContactsList = () => {
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactsList;
