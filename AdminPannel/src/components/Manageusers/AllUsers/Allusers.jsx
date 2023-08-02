import React, { useState, useEffect } from 'react';
import './Allusers.css';

const Allusers = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('');

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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleRoleFilter = (event) => {
    setRoleFilter(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    // Apply search query and role filter
    return (
      user.Name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (roleFilter === '' || user.Role === roleFilter)
    );
  });

  return (
    <div className="fcAcontainer">
      <div className="Asearch-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
        />
        <select value={roleFilter} onChange={handleRoleFilter}>
          <option value="">All</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Lawyer">Lawyer</option>
        </select>
      </div>

      <table className="Ausers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
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
