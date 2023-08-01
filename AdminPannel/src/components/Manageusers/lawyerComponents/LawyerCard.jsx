import React from "react";
import "./lawyerCard.css";
import axios from "axios";

const LawyerCard = ({ name, image, bio, profession, experience, address, skills, languages, _id }) => {
  const DeleteLawyer = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:4500/lawyer/delete/${_id}`);
      console.log('User deleted:', response.data.msg);
      alert(`${response.data.msg}`)
      window.location.reload(); // Refresh the page to fetch updated lawyer list
    } catch (error) {
      console.error('Error deleting lawyer:', error);
    }
  };

  return (
    <div className="card">
      <div className="name-div">
        <h1>{name}</h1>
        <h3>{profession}</h3>
        <p className="experience">Experience: {experience}</p>
        <p>Skills: {skills}</p>
        <p>Languages: {languages}</p>
        <p className="bio">{bio}</p>
        <p>Address: {address}</p>
      </div>
      <div className="profile-pic">
        <div style={{ position: "relative" }} className="pic">
          <img className="LawyerImageX" src={image} alt="ssss" />
        </div>
      </div>
      <button className="btn-lawyer" onClick={DeleteLawyer}>Delete Lawyer</button>
    </div>
  );
};

export default LawyerCard;
