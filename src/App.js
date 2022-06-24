import React from 'react';
import ContactActions from './ContactActions'
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Stack from 'react-bootstrap/Stack'

function App() {
  return (
    <Stack gap={3} className="col-md-10 mx-auto">
      <ContactActions selectedContact={null} />
      <ContactForm />
      <ContactList contacts={[]} />
    </Stack>
  )
}

export default App