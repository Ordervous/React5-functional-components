import React, { useState, useEffect } from 'react';

function Contact(props) {
  let { name, email, phone } = props.contact

  useEffect(() => {
    console.log(`Hello from ${name}`)
    return () => { console.log(`Goodbye from ${name}`) }
  })
  

  return (
    <tr onClick={props.onContactSelected.bind(this, email)}>
      <td>{name}</td>
      <td><a href={`mailto:${email}`}>{email}</a></td>
      <td>{phone}</td>
    </tr>
  )
}

export default Contact