import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/Login.css";

export default function RegisterForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object using the form data
    const user = {
      Name: formData.name,
      Email: formData.email,
      Password: formData.password,
    };

    // Send the registration request to the backend
    fetch("http://localhost:4500/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(data);
        alert(data.msg);
        // Reset the form
        setFormData({ name: "", email: "", password: "" });
        // Redirect to the login page
        
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              name="name"
              className="form-control mt-1"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              value={formData.password}
              onChange={handleInputChange}
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p className="login-link text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </form>
    </div>
  );
}