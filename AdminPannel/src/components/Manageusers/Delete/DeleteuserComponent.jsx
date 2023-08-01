import React, { useState, useEffect } from 'react';
import './Deleteuser.css';
import axios from 'axios';


const DeleteUserComponent = () => {
  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    fetchdata()
  }, []);


  const fetchdata = async()=>{
   
    try {
      const res = await axios.get('http://localhost:4500/users/allusers')
      
      setUsers(res.data.msg)
    } catch (error) {
      console.log(error.message)
    }
  }
const handleDelete = async(id,e)=>{
  e.preventDefault();
  try {
    axios.delete(`http://localhost:4500/users/delete/${id}`)
    
  //  fetchdata()
  window.location.reload()
  } catch (error) {
    console.log(error.message)
  }
}

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
          {users?.map((user) => (
            <tr key={user._id}>
              <td>{user.Name}</td>
              <td>{user.Email}</td>
              <td>{user.Role}</td>
              <td>
                <button onClick={(e) => handleDelete(user._id,e)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteUserComponent;
