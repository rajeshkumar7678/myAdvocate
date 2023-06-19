import React, { useState, useEffect } from 'react';
import './Deleteuser.css';

const DeleteUserComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the registered users data from the API
    fetch('http://localhost:4500/users/allusers')
      .then((response) => response.json())
      .then((responseData) => {
        // Set the fetched users data
        setUsers(responseData.msg);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleDelete = (userId) => {
    // Make the DELETE request to remove the user
    fetch(`http://localhost:4500/users/delete/${userId}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Filter out the deleted user from the users list
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="form-container">
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.Name}</td>
              <td>{user.Email}</td>
              <td>{user.Role}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteUserComponent;
