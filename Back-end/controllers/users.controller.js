const { UserModel } = require('../models/usermodel')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
require("dotenv").config()


const registerUserRoute=async (req,res)=>{


    try {
        const { email, password } = req.body;
        const isUserPresent = await User.findOne({ email });
    
        // User already present in database.
        if (isUserPresent) {
          return res
            .status(400)
            .send({ msg: "Email already taken, try another email or login" });
        }
    
        // Hash the password.
        const hashedPassword = bcrypt.hashSync(password, process.env.saltRound);
        const newUser = new User({ ...req.body, password: hashedPassword });
        await newUser.save();
        res.send({ msg: "Signup successful", user: newUser });
      } catch (error) {
        res.status(500).send({ msg: error.message });
      }
}


const loginUserRoute = async (req, res) => {
    
    
     
  };
  
  const logoutUser = async (req, res) => {
    
    
  };
  
  const generateNewAccessToken = async (req, res) => {
    
  };