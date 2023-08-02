import React, { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './Form.css'; // Assume you have a CSS file named Form.css for styling
import axios from 'axios';
// import { useEffect } from 'react
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Selected role: lawyer or admin
  const MySwal = withReactContent(Swal)
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', { name, email, password, role });
    try {
        const response = await axios.post('http://localhost:4500/users/admin/register', {
          Name:name,
          Email:email,
          Password:password,
          Role:role
        });
        MySwal.fire(<p>{response.data.msg}</p>)
      
        // Reset form fields
        setName('');
        setEmail('');
        setPassword('');
        setRole("")
      } catch (error) {
        console.error('Error adding user:', error.message);
      }
  };


  return (
    <div className="fcontainer">
      <form onSubmit={((e)=>handleSubmit(e))}>
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
        
             <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Lawyer">Lawyer</option>
          </select>
        </div>
        <button type="submit">Add User</button>
      </form>
 </div>
  );
};

export default Form;
