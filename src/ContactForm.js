import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function ContactForm(props) {
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" name="phone" />
      </Form.Group>
      <Button type="submit">Add Contact</Button>
    </Form>
  )
}

export default ContactForm