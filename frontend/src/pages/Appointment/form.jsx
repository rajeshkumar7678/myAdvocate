// import React from "react";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./form.css";




const Form = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    caseSummary: ''
  });
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`http://localhost:4500/lawyer/${id}`);
        // console.log(response.data);
        setImageUrl(response.data[0].image);
      } catch (error) {
        console.log('Error fetching image:', error);
      }
    };
    fetchImage();

  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div className="main-form">
      <div>
        {imageUrl ? (
          <img src={imageUrl} alt="Image" />
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" placeholder="Enter Your Name Here" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" placeholder="Enter Your Email Here" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Phonenumber</label>
            <input type="number" placeholder="Enter Your Phonenumber Here" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <div id="emailHelp" class="form-text">We'll never share your Phonenumber with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Case Summary</label>
            <input type="text" placeholder="Enter Your Case Details" class="form-control" id="exampleInputPassword1"
              name="caseSummary"
              value={formData.caseSummary}
              onChange={handleInputChange}
              rows="4"
              cols="50"
              required
            />
            <div id="emailHelp" class="form-text">Don'tworry Your Data will be confidential here</div>

          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary" value="Submit">Submit</button>

        </form>

      </div>
    </div>
  );



};

export default Form;