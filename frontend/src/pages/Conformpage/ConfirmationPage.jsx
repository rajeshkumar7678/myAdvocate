import React from 'react';
import './ConfirmationPage.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  // let user;
  const localUser = JSON.parse(localStorage.getItem('user'));
  fetch(`http://localhost:4500/users/getdata/?_id=${localUser._id}`)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the backend
      // console.log(data.Apointments);
      // user = data;
      localStorage.setItem("userdata",JSON.stringify(data));
      // alert(data.msg);
      // // Reset the form
      // setFormData({ name: "", email: "", password: "" });
      // Redirect to the login page
      
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error(error);
    });
    const user = JSON.parse(localStorage.getItem('userdata'));
    console.log(user)
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