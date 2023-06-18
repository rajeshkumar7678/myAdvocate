require("dotenv").config()
const passport=require("passport");
const {UserModel}=require("../models/usermodel")
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.googleclientid,
    clientSecret: process.env.googleclientsecret,
    callbackURL: "http://localhost:4500/users/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    try {
      let Email=profile._json.email
      const user=await UserModel.findOne({Email})
      //console.log(user)

      if(!user){
        console.log("adding new user")
        let newuser=new UserModel({
          Email,
          Name:profile._json.name,
          Password:"12345678",
          Role:"User"          
        })
        await newuser.save()
        return cb(null, newuser)
      }else{
        console.log("user is present db")
        return cb(null, user)

      }
    } catch (error) {
      console.log(error)
    }
    
    //console.log(profile)
    
  }
));

module.exports={passport}