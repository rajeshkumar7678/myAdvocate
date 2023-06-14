import React from "react";



const Register = ()=>{

    return  <div>
  
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
                         <input  id="submit" type="submit" value="Sign In"/>
                      </fieldset>

                     
                      <button id="log-n"> <a href="./login.html">Existing User? login </a></button>

    
    </form>
    
    </div>;




     
}



export default Register