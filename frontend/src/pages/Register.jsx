import React from "react";
import "../Components/Register.css"


const Register = ()=>{

    return  <div className="main-div">

      <div className="image-div">

      </div>

      <div className="form-div">
      <h1>Register</h1>

  
    <form  action="">

    <fieldset>
                      
                      <legend>Enter Your Name</legend>
                      <input type="text" id="name" />
                   </fieldset>
                    <fieldset>
                     <legend>Enter Your Email</legend>
                     <input type="email" name="" id="email"/>
                    </fieldset>
                   <fieldset>
                     <legend>Enter Your password</legend>
                     <input type="password" id="password"/>
                  </fieldset>
                      <fieldset>
                         <legend>click on submit</legend>
                         <input  id="submit" type="submit" value="Sign Up"/>
                      </fieldset>

                     
                      <button id="log-n"> <a href="./login">Existing User? login </a></button>

    
    </form>

    </div>
    
    </div>;




     
}



export default Register