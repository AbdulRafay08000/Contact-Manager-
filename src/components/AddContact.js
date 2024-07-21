import React, { useState } from 'react';

function AddContact({ addContact }) {
  const [contactData, setContactData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleAdd = (e) => {
    if (contactData.email === '' || contactData.name === '') {
      alert("Please add details");
      return;
    }
    addContact(contactData);
    setContactData({ name: '', email: '' });
  };

  return (
    <div className='formHeader'>
      <div className='addContacts'>
        Add Contact
      </div>
      <form>
        <label>Name</label> <br/>
        <input
          type='text'
          placeholder='Enter Name'
          name='name'
          value={contactData.name}
          onChange={handleChange}
          className='contacts'
        />
        <br/>
        <label>Email</label> <br/>
        <input
          type='email'
          placeholder='Enter Your Email'
          name='email'
          value={contactData.email}
          onChange={handleChange}
        />
      </form>
      <button className='btn' onClick={handleAdd}> Add Contact</button>
    </div>
  );
}

export default AddContact;
