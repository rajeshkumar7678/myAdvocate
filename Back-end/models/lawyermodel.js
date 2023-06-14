const mongoose = require('mongoose');

const lawyerSchema = mongoose.Schema({
   name: String,
   address: String,
   bio: String,
   profession: String,
   gender: String,
   phone: Number,
   image: String,
   price: String,
   experience: String,
   email: String,
   Rank: Number

}, { timestamps: true })


const LawyerModel = mongoose.model('lawyer', lawyerSchema);

module.exports = { LawyerModel };
