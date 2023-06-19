import React, { useEffect, useState } from "react";

const UserDataComponent = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:4500/users/allusers");
      const data = await response.json();
      setUsers(data.msg);
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

    try {
      const response = await fetch(
        `http://localhost:4500/users/update/${selectedUser._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "applicationjson",
          },
          body: JSON.stringify({
            Name,
            Email,
            Role,
          }),
        }
      );

      if (response.ok) {
        // User successfully updated, handle the response accordingly
        console.log("Data Updated into DB");
        setSelectedUser(null);
        setName("");
        setEmail("");
        setRole("");
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
