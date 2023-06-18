import React from 'react';
import './ConfirmationPage.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="confirmation-container">
      <h2 className="confirmation-title">Appointment Confirmation</h2>
      <div className="confirmation-details">
        <h3 className="confirmation-label">
          With Lawyer: {user.Apointments[user.Apointments.length - 1].adv_name}
        </h3>
        <p className="confirmation-info">
          Date: {user.Apointments[user.Apointments.length - 1].Date}
        </p>
        <p className="confirmation-info">
          Time: {user.Apointments[user.Apointments.length - 1].Time}
        </p>
        <p className="confirmation-info">
          Phone Number: {user.Apointments[user.Apointments.length - 1].phoneNumber}
        </p>
      </div>
      <p className="confirmation-message">Thank you for scheduling an appointment.</p>
      <Link to={"/userdesh"}><button className="confirmation-button">Done</button></Link>
    </div>
  );
};

export default ConfirmationPage;