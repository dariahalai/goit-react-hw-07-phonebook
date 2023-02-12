import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { Section, Title } from './App.styled';
import Loader from './Loader/Loader';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from 'redux/selectors';

export function App() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError)
  return (
    <>
      <Section>
        <Title>Phonebook</Title>
        <Form />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter />
        {isLoading && !error ? <Loader/> :<ContactsList />}
      </Section>
    </>
  );
}
