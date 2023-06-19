import React from 'react';
import "./userdesh.css"
import { Link } from 'react-router-dom';
const AppointmentCard = ({ advName, profession, meetingTime, meetingDate, caseSummary ,name}) => {
  console.log(name)
  return (
    <div className="raj-appointment-card">
      <h1>{advName}</h1>
      <h3>{profession}</h3>
      <h3>{meetingTime}</h3>
      <h3>{meetingDate}</h3>
      <h4>{caseSummary}</h4>
      <div>
        {/* <button className='raj-button'>Chat with Lawyer</button> */}
        <Link to={`/chatbox/${name}/${advName}`}><button className='raj-button'>chat with lawyer</button></Link>
        <button className='raj-button'>Cancel Appointment</button>
          {/* <Link><button className='raj-button'>cancel apointment</button></Link> */}
      </div>
    </div>
  );
};

export default AppointmentCard;