/* eslint-disable no-unused-vars */
import React from "react";
import "./lawyerCard.css";

import { Link } from "react-router-dom"
const LawyerCard = ({ name, image, bio, profession, experience, address, skills, languages, _id }) => {



  function returnStar(bum) {
    let arr = [];
    for (let i = 0; i < bum; i++) {
    }

    return arr;
  }

  return (

    <div className="card">
      <div className="name-div">
        <h1>{name}</h1>
        <h3>{profession}</h3>
        <p className="experience">Experience: {experience}</p>
        <p>Skills:{skills}</p>
        <p>Languages:{languages}</p>
        <p className="bio">{bio}</p>
        <p>Address:{address}</p>

      </div>
      <div className="profile-pic">
        <div style={{ position: "relative" }} className="pic">
          <img className="LawyerImageX" src={image} alt="ssss" />
        </div>
      </div>
    
     
      <Link to={`/form/${_id}`}> <button className="btn-lawyer"> Book an Appointment</button> </Link>
       
    </div>



  );
};

export default LawyerCard;