import React from "react";
import "../Components/Register.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import HOST from "../Utils/baseURL";
import imageFileName from '../images/home1.jpg';


const Register = () => {
  // const navigate = useNavigate();

  

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [lawyer, setLawyer] = useState("");
  let [user, setUser] = useState("");
  let [password, setPassword] = useState("");

  const signUp = async (data) => {
    const response = await fetch(`${HOST}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json);
    
  };

  const handleSubmit = () => {
    let data = {
      email,
      password,
      name,
      user,
      lawyer,
    };
    signUp(data);
  };
  return (
      
    <div className="signUpdiv">
     
      {/* {contextHolder} */}
      <div className="left-div">
        <img  src={imageFileName} alt="acelogo" />
      </div>
      <div className="right-div">
        <form
          className="Signupform"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <h1 className="RegisterTitle">Register</h1>
          <p style={{ color: "grey", fontSize: "13px" }}>
             Signup to MyAdvocate
          </p>
          <fieldset>
            <legend>Enter user name</legend>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            className="SignupUserName"
            placeholder="&nbsp;&nbsp;Username"
            required
          />
          </fieldset>
        
        
        <fieldset>
          <legend>Enter Your Email</legend>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            className="SignupEmail"
            placeholder="&nbsp;&nbsp;Email"
            required
          />
          </fieldset>

          <fieldset>
            <legend>Enter Password</legend>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            className="SignupPass"
            placeholder="&nbsp;&nbsp;Password"
            required
          />
          </fieldset>


<label htmlFor="user">User</label>
        <input
  onChange={(event) => {
    setUser(event.target.value);
  }}
  type="radio"
  name="userType"
  value="user"
  className="SignupUser"
  required
/>

<label htmlFor="lawyer">Lawyer</label>

<input
  onChange={(event) => {
    setLawyer(event.target.value);
  }}
  type="radio"
  name="userType"
  value="lawyer"
  className="SignupLawyer"
  required
/>



          <span className="alreadyacc">
            Already have an account ?
            <Link className="SignInSmol" to="/login">
              &nbsp; Sign in
            </Link>
          </span>
          <input
            type="submit"
            value="Continue"
            style={{ cursor: "pointer", margin: "0" }}
            className="ContinueRegis"
          />

          <div className="social-message">
            <div className="line">-</div>
            <p className="message">Login with social accounts</p>
            <div className="line">-</div>
          </div>
          <div className="SocialIcons">
            <div>
              <img
                style={{ width: "25px" }}
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                alt="icon"
              />
              <label>Continue With Google</label>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;