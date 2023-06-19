import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import  ImageLogo from "../navbar/logo.png"
const Login = () => {

  const navigate = useNavigate(); // Initialize useNavigate hook

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      Email: formData.email,
      Password: formData.password,
    };

    fetch("http://localhost:4500/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(data.msg);
        if(data.userdetails){
         
          localStorage.setItem('user', JSON.stringify(data.userdetails));
          navigate("/",{ state: { user: data.userdetails } })// Redirect to the home page
          setFormData({ email: "", password: "" });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className="login-page">
      
      <div className="login-form-container">
      <div className="login-logo">
        <img src={ImageLogo} alt="Logo" />
      </div>
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Admin Panel Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password" >Password:</label>
            <input type="password" id="password" value={formData.password}name="password" onChange={handleInputChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
