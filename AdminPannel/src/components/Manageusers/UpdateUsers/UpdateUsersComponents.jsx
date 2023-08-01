import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./UpdateUsersComponents.css";

const UserDataComponent = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole] = useState("");
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4500/users/allusers");
      setUsers(response.data.msg);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setName(user.Name);
    setEmail(user.Email);
    setRole(user.Role);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
console.log(selectedUser._id)
    try {
      const response = await axios.patch(
        `http://localhost:4500/users/UpdateUser/${selectedUser._id}`,
        {
          Name,
          Email,
          Role,
        }
      );
     console.log(response.json())
      if (response.status === 200) {
        MySwal.fire(<p>Data Updated into DB</p>);
        setSelectedUser(null);
        setName("");
        setEmail("");
        setRole("");
        fetchUsers();
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="container">
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.Name}</td>
              <td>{user.Email}</td>
              <td>{user.Role}</td>
              <td>
                <button onClick={() => handleUpdate(user)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="update-form">
          <h2>Update User</h2>
          <form onSubmit={handleUpdateSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Role:
              <input
                type="text"
                value={Role}
                onChange={(e) => setRole(e.target.value)}
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
};

export default UserDataComponent;
