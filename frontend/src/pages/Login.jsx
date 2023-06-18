import React from "react";
import "../Components/Login.css"

// import  { useContext,  useState } from "react";
import { Link} from "react-router-dom";
// import HOST from "../Utils/baseURL";


const Login = () => {
//   const { UserDetails, setUserDetails } = useContext(UserContext);
//   const { Auth, setAuth } = useContext(AuthContext);


//   const signIN = async (data) => {
//     const response = await fetch(`${HOST}/user/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email: data.email, password: data.password }),
//     });

//     // const Data = await response.json();
//     // if (Data.status === "success") {
//     //   localStorage.setItem("token", Data.token);
//     //   setUserDetails(Data.userData);
//     //   setAuth(true);
//     //   setTimeout(() => {
//     //     setAuth(true);
//     //     console.log("Login Success");
//     //     navigate("/userdesh");
//     //   }, 1000);
//     // } else {
//     //   console.log("Invalid Credentials", "Enter valid account details.");
//     // }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (value === "User Email") {
//       let data = {
//         email,
//         password,
//       };
//       signIN(data);
//     } else if (value === "Lawyer ID") {
//       console.log("Hello from lawyer");
//     } else {
//       if (email === "admin@gmail.com" && password === "admin") {
//         // setAuth(true);
//         // navigate("/admin");
//       }
//     }
//   };
  
  return (
    <div className="form-container">
      {/* {contextHolder} */}
      <p className="logintitle">Login</p>
      <div className="labeldiv">
        <label
        //   onClick={() => handleClick("User Email")}
        //   style={{
        //     backgroundColor: value !== "User Email" ? "#fafafa" : "#ffd41f",
        //     border: "none",
        //   }}
        >
          User
        </label>
        <label
        //   onClick={() => handleClick("Lawyer ID")}
        //   style={{
        //     backgroundColor: value !== "Lawyer ID" ? "#fafafa" : "#ffd41f",
        //     border: "none",
        //   }}
        >
          Lawyer
        </label>
        <label
        //   onClick={() => handleClick("Admin ID")}
        //   style={{
        //     backgroundColor: value !== "Admin ID" ? "#fafafa" : "#ffd41f",
        //     border: "none",
        //   }}
        >
          Admin
        </label>
      </div>
      <div className="userpng">
        <img src="" alt="" />
      </div>
      <div>
        <form className="form" > 
        
          <div className="input-group">
            <label htmlFor="username" className="fontweightfive">
              {/* {value} */}
            </label>
            <input
            //   onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="username"
              id="username"
              placeholder="User Name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="fontweightfive">
              Password
            </label>
            <input
            //   onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />

            <div className="forgot">
              <div rel="noopener noreferrer" className="yellohover">
                {/* <ForgotModal /> */}
              </div>
            </div>
          </div>
          <button className="signInBtn" type="submit">
            Sign in
          </button>
        </form>
        <div className="social-message">
          <div className="line"></div>
          <p className="message">Login with social accounts</p>
          <div className="line"></div>
        </div>

        <div className="SocialIcons">
          <div>
            <img
              style={{ width: "30px" }}
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt="icon"
            />
            <label>Google Login</label>
          </div>
          
        </div>
        <p className="signup">
          Don't have an account?
          <Link to="/register" style={{ color: "teal" }}>
            &nbsp; Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


  

