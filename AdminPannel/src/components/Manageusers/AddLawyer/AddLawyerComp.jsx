import React, { useState } from 'react';
import "./AddLawyerComp.css"
const AddLawyerComp = () => {
  const [lawyerData, setLawyerData] = useState({
    name: '',
    profession: '',
    address: '',
    skills: '',
    experience: '',
    language: '',
    price: '',
    rating: '',
    image: '',
    bio: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLawyerData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('API_ENDPOINT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(lawyerData)
      });

      if (response.ok) {
        // Success: Lawyer data saved
        console.log('Lawyer data saved successfully');
      } else {
        // Error: Failed to save lawyer data
        console.error('Failed to save lawyer data');
      }
    } catch (error) {
      // Exception: Network error or other exception occurred
      console.error('Error occurred while saving lawyer data:', error);
    }

    // Reset form fields
    setLawyerData({
      name: '',
      profession: '',
      address: '',
      skills: '',
      experience: '',
      language: '',
      price: '',
      rating: '',
      image: '',
      bio: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={lawyerData.name}
        onChange={handleInputChange}
      />

      {/* Profession */}
      <label htmlFor="profession">Profession:</label>
      <input
        type="text"
        id="profession"
        name="profession"
        value={lawyerData.profession}
        onChange={handleInputChange}
      />

      {/* Address */}
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={lawyerData.address}
        onChange={handleInputChange}
      />

      {/* Skills */}
      <label htmlFor="skills">Skills:</label>
      <input
        type="text"
        id="skills"
        name="skills"
        value={lawyerData.skills}
        onChange={handleInputChange}
      />

      {/* Experience */}
      <label htmlFor="experience">Experience:</label>
      <input
        type="text"
        id="experience"
        name="experience"
        value={lawyerData.experience}
        onChange={handleInputChange}
      />

      {/* Language */}
      <label htmlFor="language">Language:</label>
      <input
        type="text"
        id="language"
        name="language"
        value={lawyerData.language}
        onChange={handleInputChange}
      />

      {/* Price */}
      <label htmlFor="price">Price:</label>
      <input
        type="text"
        id="price"
        name="price"
        value={lawyerData.price}
        onChange={handleInputChange}
      />

      {/* Rating */}
      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        name="rating"
        value={lawyerData.rating}
        onChange={handleInputChange}
      />

      {/* Image */}
      <label htmlFor="image">Image:</label>
      <input
        type="text"
        id="image"
        name="image"
        value={lawyerData.image}
        onChange={handleInputChange}
      />

      {/* Bio */}
      <label htmlFor="bio">Bio:</label>
      <input
        type="text"
        id="bio"
        name="bio"
        value={lawyerData.bio}
        onChange={handleInputChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddLawyerComp;
