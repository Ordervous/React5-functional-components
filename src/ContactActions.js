import React from 'react'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

function ContactActions(props) {
    // or ({selectedContact}) instead of props
  return <Stack direction="horizontal" gap={3}>
    { (props.selectedContact)
      ? <Button variant="danger" onClick={props.onDeleteContact}>
          Delete {props.selectedContact}
        </Button>
      : ""
    }
  </Stack>
}

export default ContactActions