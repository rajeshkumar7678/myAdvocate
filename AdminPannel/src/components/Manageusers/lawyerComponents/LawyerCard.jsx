import React from "react";
import "./lawyerCard.css";
import axios from "axios";

// import { Link } from "react-router-dom"
const LawyerCard = ({ name, image, bio, profession, experience, address, skills, languages, _id }) => {

const DeleteLawyer= async(e)=>{
   e.preventDefault()
   try {
    const response = await axios.delete(`https://localhost:4500/laywer/delete/${_id}`);
    console.log('User added:', response.msg);
    // Reset form fields
  } catch (error) {
    console.error('Error adding user:', error);
  }
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
    
     
      <button className="btn-lawyer" onClick={((e)=>DeleteLawyer(e))}> Delete Lawyer</button>
       
    </div>



  );
};

export default LawyerCard;