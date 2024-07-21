import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function ContactList({ contacts, deleteContact }) {
  console.log(contacts, "from ContactList");

  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <div key={index} className="contact-item">
          <div className="contact-details">
            <div>{contact.name}</div>
            <div>{contact.email}</div>
          </div>
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="delete-icon"
            onClick={() => deleteContact(contact.email)}
          />
        </div>
      ))}
    </div>
  );
}

export default ContactList;
