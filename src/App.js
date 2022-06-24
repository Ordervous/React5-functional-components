import React, { useState } from 'react';
import ContactActions from './ContactActions'
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Stack from 'react-bootstrap/Stack'

function App() {
  const [contacts, setContacts] = useState([])

  function handleNewContact(contact) {
    setContacts(contacts.concat(contact))
  }

  return (
    <Stack gap={3} className="col-md-10 mx-auto">
      <ContactActions selectedContact={null} />
      <ContactForm onNewContact={handleNewContact} />
      <ContactList contacts={contacts} />
    </Stack>
  )
}

export default App