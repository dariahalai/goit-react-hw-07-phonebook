import { useSelector } from 'react-redux';
import ContactsListItem from 'components/ContactsListItem';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  console.log(filter)
  console.log(contacts)
  const visibleContacts =
    [
      ...contacts.filter(contact =>
        contact.contactName.toLowerCase().includes(filter)
      ),
    ] || [];

  return (
    <ul>
      {visibleContacts.map(({ id, contactName, contactNumber }) => (
        <ContactsListItem key={id} id={id} name={contactName} number={contactNumber} />
      ))}
    </ul>
  );
};

export default ContactsList;
