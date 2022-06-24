import React from 'react';

function Contact(props) {
  let { name, email, phone } = props.contact

  return (
    <tr onClick={props.onContactSelected.bind(this, email)}>
      <td>{name}</td>
      <td><a href={`mailto:${email}`}>{email}</a></td>
      <td>{phone}</td>
    </tr>
  )
}

export default Contact