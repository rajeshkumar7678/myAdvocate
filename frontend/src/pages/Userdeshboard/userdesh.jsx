import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import "./userdesh.css"
import logo from './wired.gif';
import { Link, Navigate } from 'react-router-dom';


function Userdesh() {
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
 
  async function fetchuser(){
    let response = await fetch(`http://localhost:4500/users/getdata/?_id=648d9353058781ef9d014a05`)

    let data = await response.json();
    
    setemail(data.Email)

    setname(data.Name)
    
    
  }
  useEffect(() => {
    fetchuser()
  }, []);
  
 
  return (
    <div>
      <Navbar/>
      <div className='deshmain'>
        <div className='raj-userdetails'>
          <div>
            <img src={logo} alt="" />
          </div>
          <h2>{name}</h2>
          <h3>{email}</h3>
          <Link to={`/lawyers`}> <button className='raj-button'>book an Apointment +</button></Link>

        </div>
        <div>
          <h1>YOUR APOINTMENT</h1>
        <div className='raj-userappointment'>
         <h1>Adv name</h1>
         <h3>profession</h3>
         <h3>meeting time</h3>
         <h3>meeting date</h3>
         <h4>case summary</h4>
         <div>
          <button className='raj-button'>chat with lawyer</button>
          <button className='raj-button'>cancel apointment</button>
         </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Userdesh

