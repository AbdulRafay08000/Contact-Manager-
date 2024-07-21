import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/contactList';
import React, { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (data) => {
    setContacts([...contacts, data]);
    console.log(data, "from App.js");
  };

  const deleteContact = (email) => {
    const newContacts = contacts.filter(contact => contact.email !== email);
    setContacts(newContacts);
  };

  return (
    <div className='App'>
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
