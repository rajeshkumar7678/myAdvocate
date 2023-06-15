import React from "react";
import "../Components/Login.css"

const Login = ()=>{

    return  <div className="main-div">

   <div className="image-div"></div>

    <div className="form-div">
    <form  action="">


                    <fieldset>
                     <legend>Enter Your Email</legend>
                     <input type="email" name="" id="email"/>
                    </fieldset>
                   <fieldset>
                     <legend>Enter Your password</legend>
                     <input type="password" id="password"/>
                  </fieldset>
                      <fieldset>
                         <legend>click on Sign in</legend>
                         <input  id="submit" type="submit" value="Sign In"/>
                      </fieldset>

    
    </form>
    </div>
    
    </div>;




     
}



export default Login