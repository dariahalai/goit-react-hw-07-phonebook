import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { Section, Title } from './App.styled';

export function App() {
  return (
    <>
      <Section>
        <Title>Phonebook</Title>
        <Form />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
}
