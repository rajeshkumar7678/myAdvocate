import React, { useState, useEffect } from 'react';
import './Allusers.css';

const Allusers = () => {
    const [users, setUsers] = useState([]);
  useEffect(() => {
    // Fetch the registered users data from the API
    fetch('http://localhost:4500/users/allusers')
      .then((response) => response.json())
      .then((responseData) => {
        // Set the fetched users data
        console.log(responseData.msg)
        setUsers(responseData.msg);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);



  return (
    <div className="form-container">

      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.Name}</td>
              <td>{user.Email}</td>
              <td>{user.Role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allusers;
