import ContactItem from './ContactItem';

export function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        ></ContactItem>
      ))}
    </ul>
  );
}
