import React, { useState } from 'react';
import './Form.css'; // Assume you have a CSS file named Form.css for styling
import axios from 'axios';
// import { useEffect } from 'react
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Selected role: lawyer or admin
   
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', { name, email, password, role });
    try {
        const response = await axios.post('https://localhost:4500/users/admin/register', {
          name,
          email,
          password,
        });
        console.log('User added:', response.data);
        // Reset form fields
        setName('');
        setEmail('');
        setPassword('');
        setRole("")
      } catch (error) {
        console.error('Error adding user:', error);
      }
  };


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Select Role:</label>
          <input type="text" name="" id="" value={role} onChange={(e)=>{
               setRole(e.target.value)   
          }}/>
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Form;
