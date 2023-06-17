import React from "react";
import { useState } from "react";

const LawyerFilterer = () => {
  const [Filtrer, setFilterer] = useState("0px");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 150) {
      setFilterer("-130px");
    } else {
      setFilterer("5px");
    }
  });

  return (
    <div
      className="LawyerFilterer"
      style={{ transform: `translateY(${Filtrer})` }}
      data-aos="fade-up"
    >
      <h1>Lawyers by Profession  :</h1>
      <br />
      <hr />
      <fieldset>
        <legend>Based on Profession :</legend>
        <div>
          <input
            type="radio"
            name="format"
            id="cdll"
            value="Criminal Defense Lawyer"
            defaultChecked
          />
          <label name="cdll">Criminal Defense Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="illy"
            value="Immigration Lawyer"
          />
          <label name="illy">Immigration Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="clopo"
            value="Corporate Lawyer"
          />
          <label name="clopo">Corporate Lawyer</label>
        </div>
        <div>
          <input
            type="radio"
            name="format"
            id="asdfd"
            value="Intellectual Property Lawyer"
          />
          <label name="asdfd">Intellectual Property Lawyer</label>
        </div>
  
      </fieldset>
    </div>
  );
};

export default LawyerFilterer;
