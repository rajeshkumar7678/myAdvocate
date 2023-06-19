import React from 'react';
import "./userdesh.css"
const AppointmentCard = ({ advName, profession, meetingTime, meetingDate, caseSummary }) => {
  return (
    <div className="raj-appointment-card">
      <h1>{advName}</h1>
      <h3>{profession}</h3>
      <h3>{meetingTime}</h3>
      <h3>{meetingDate}</h3>
      <h4>{caseSummary}</h4>
      <div>
        <button className='raj-button'>Chat with Lawyer</button>
        <button className='raj-button'>Cancel Appointment</button>
      </div>
    </div>
  );
};

export default AppointmentCard;