/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import "./userdesh.css"
import logo from './wired.gif';
import { Link, Navigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import AppointmentCard from './AppointmentCard';


function Userdesh() {
  const location = useLocation();
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const loginuser = JSON.parse(localStorage.getItem('user'));
  // console.log(loginuser);
   
    fetch(`http://localhost:4500/users/getdata/?_id=${loginuser._id}`)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the backend
      // console.log(data.Apointments);
      // user = data;
      localStorage.setItem("userdata",JSON.stringify(data));
      console.log("data aa rha h",data)
      // alert(data.msg);
      // // Reset the form
      // setFormData({ name: "", email: "", password: "" });
      // Redirect to the login page
      
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error(error);
    });
   
   const loginuser1 = JSON.parse(localStorage.getItem('userdata'));
  let apoint=loginuser1.Apointments
  // console.log(loginuser1)
  // console.log(apoint)
  
  return (
    <div>
      <Navbar />
      <div className='deshmain'>
        <div className='raj-userdetails'>
          <div>
            <img src={logo} alt="" />
          </div>
          <h2>{loginuser.Name}</h2>
          <h3>{loginuser.Email}</h3>
          <Link to={`/lawyers`}>
            <button className='raj-button'>Book an Appointment +</button>
          </Link>
        </div>
        <div>
          <h1>Your Appointments</h1>
          {
            apoint.length<=0 ? <h1>No Appointment Booked Yet</h1> :
          
          (apoint.map(appointment => (
            
            <AppointmentCard
              key={appointment.id}
              advName={appointment.adv_name}
              profession={appointment.adv_profession}
              meetingTime={appointment.Time}
              meetingDate={appointment.Date}
              caseSummary={appointment.CaseSummary}
              name={loginuser.Name}
            />
          )))}


        </div>
      </div>
    </div>
  );
}
export default Userdesh;
