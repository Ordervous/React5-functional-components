import React, { useState, useEffect } from 'react';
import ContactActions from './ContactActions'
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Stack from 'react-bootstrap/Stack'

function App() {
  const [contacts, setContacts] = useState(null)
  const [selectedContact, setSelectedContact] = useState(null)

  useEffect(() => {
    if (contacts === null) {
      setContacts(JSON.parse(localStorage.getItem("contacts") || "[]"))
      setSelectedContact(localStorage.getItem("selectedContact"))
    } else {
      localStorage.setItem("contacts", JSON.stringify(contacts))
      localStorage.setItem("selectedContact", selectedContact)
    }
    if (selectedContact === null) localStorage.removeItem("selectedContact")
  }, [contacts, selectedContact])
  


  function handleNewContact(contact) {
    setContacts(contacts.concat(contact))
    // let newContactList = contacts.concat(contact)
    // setContacts(newContactList)
    // localStorage.setItem("contacts", JSON.stringify(newContactList));
  }

  function handleContactSelected(email) {
    setSelectedContact(email)
    // localStorage.setItem("selectedContact", email)
  }

  function handleDeleteContact() {
    setContacts(contacts.filter((contact) => contact.email !== selectedContact))
    setSelectedContact(null)
  }

  return (
    <Stack gap={3} className="col-md-10 mx-auto">
    <br/>
      <ContactActions selectedContact={selectedContact} onDeleteContact={handleDeleteContact} />
      <ContactForm onNewContact={handleNewContact} />
      <ContactList contacts={contacts} onContactSelected={handleContactSelected} />
    </Stack>
  )
}

export default App