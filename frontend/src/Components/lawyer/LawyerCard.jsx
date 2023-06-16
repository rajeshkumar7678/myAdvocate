import React from "react";
import "./lawyerCard.css";
const LawyerCard = ({name,image,bio,profession,experience}) => {


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
        </div>
    <div className="bio-div">
      <p className="bio">{bio}</p>
    </div>

    <div className="profile-pic">
      <div style={{ position: "relative" }} className="pic">
        <img className="LawyerImageX" src={image} alt="ssss" />
        <div className="LawyerImageXDark" alt="ssss">
          Select the <br /> Lawyer
        </div>
      </div>
    </div>
  </div>






  );
};

export default LawyerCard;
