import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./form.css";


const Form = () => {
  const navigate = useNavigate();
  const [advocate,setadvocate]=useState({})
  const [imageUrl, setImageUrl] = useState(null);
  const [formData, setFormData] = useState({
    Date: '',
    Time: '',
    phoneNumber: '',
    caseSummary: ''
  });
  const { id } = useParams();

  useEffect(() => {

    const fetchImage = async () => {
      try {
        const response = await axios.get(`http://localhost:4500/lawyer/${id}`);
        
        setadvocate(response.data[0])
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    formData.adv_name=advocate.name;
    formData.adv_id=advocate._id;
    formData.adv_profession=advocate.profession;
    // console.log("hello",advocate);
    console.log('Form Data:', formData);
    const user = JSON.parse(localStorage.getItem('user'));
        
    try {
      // Send form data to the backend and update user data
      fetch(`http://localhost:4500/users/update/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.user){
            alert(data.msg)
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/confornpage");
          }else{
            alert(data.msg)
          }
          
          
        })
        .catch((error) => {
          console.error(error);
        });
      //console.log('Form Data:', formData);
      // Reset the form after successful submission
      setFormData({
        Date: '',
        Time: '',
        PhoneNumber: '',
        CaseSummary: ''
      });
    } catch (error) {
      console.log('Error submitting form data:', error);
    }
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
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Appointment date</label>
            <input
              type="date"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="Date"
              value={formData.Date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Appointment time</label>
            <input
              type="time"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="Time"
              value={formData.Time}
              onChange={handleInputChange}
              required
            />
            <div id="emailHelp" className="form-text">Time slot will be for 1 hour only</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Phone number</label>
            <input
              type="number"
              placeholder="Enter Your Phonenumber Here"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <div id="emailHelp" className="form-text">We'll never share your Phonenumber with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Case Summary</label>
            <textarea
              placeholder="Enter Your Case Details"
              className="form-control"
              id="exampleInputPassword1"
              name="caseSummary"
              value={formData.caseSummary}
              onChange={handleInputChange}
              rows="4"
              cols="3"
              required
            />
            <div id="emailHelp" className="form-text">Don't worry, your data will be confidential here</div>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;