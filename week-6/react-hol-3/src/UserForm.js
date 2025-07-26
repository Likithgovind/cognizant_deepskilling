import React, { useState } from 'react';
import UserDetails from './UserDetails';

function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} /><br />
        
        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} /><br />
        
        <label>Age:</label>
        <input type="number" name="age" value={user.age} onChange={handleChange} /><br />
        
        <button type="submit">Submit</button>
      </form>

      {submitted && <UserDetails user={user} />}
    </div>
  );
}

export default UserForm;
