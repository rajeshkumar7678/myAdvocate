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
  
  
  let apoint=loginuser.Apointments
  console.log(apoint)
  
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
          {apoint.map(appointment => (
            <AppointmentCard
              key={appointment.id}
              advName={appointment.adv_name}
              profession={appointment.adv_profession}
              meetingTime={appointment.Time}
              meetingDate={appointment.Date}
              caseSummary={appointment.CaseSummary}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Userdesh;
