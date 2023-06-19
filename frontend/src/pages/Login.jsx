import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/Login.css";

export default function LoginForm(props) {
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
          navigate("/userdesh",{ state: { user: data.userdetails } }); // Redirect to the home page
        }else{
          setFormData({ email: "", password: "" });
        }
        
        
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
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
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot
            <Link to={"#"}>password?</Link>
          </p>
          <p className="signup-link text-center mt-2">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
