const express = require('express')
const { UserModel } = require('../models/usermodel')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const {client} = require('../helpers/redis');
require("dotenv").config()




const userRouter=express.Router()


userRouter.get("/",(req,res)=>{
    res.send("user routes")
})

//register====================================

userRouter.post("/register", async(req,res)=>{
    try {
        let {Name,Email,Password}=req.body
        let user=await UserModel.findOne({Email})
        console.log(user)

        if(user){
            return res.status(400).send({"msg":"already exist please login"})
        }

        let hashpasswod= bcrypt.hashSync(Password,6)

        let newuser= new UserModel({Name,Email,Password:hashpasswod,Role:"User"})
        
        let dbnewuser=await newuser.save()

        console.log(dbnewuser)
        
       
        res.status(200).send({"msg":"User registered successfully."})


    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
})


//login route===========================================

userRouter.post("/login",async (req,res)=>{
    try {
        let {Email,Password}=req.body

        let user=await UserModel.findOne({Email})

        if(!user){
            return res.status(400).send({"msg":"register first then login"})
        }

        let decrupt=await bcrypt.compare(Password,user.Password)
        console.log(decrupt)
        
        if(!decrupt){
            return res.status(400).send({"msg":"incorrect password"})
        }

        let token=jwt.sign({id:user._id,role:user.Role},"rajesh",{expiresIn:"6hr"})
        let refreshtoken=jwt.sign({id:user._id,role:user.Role},"rajesh",{expiresIn:"6d"})

        client.set('token', token, 'EX', 3600);
        client.set('refreshtoken', refreshtoken, 'EX', 3600);

        res.status(200).send({"msg":"Login sucessfull","userdetails":user})

    } catch (error) {
        res.status(400).send(error.message)
    }
})


userRouter.get("/getuser", async(req,res)=>{
    try {
        let {_id}=req.query
        let usertoken=await client.get('token');
        let decodedtoken=jwt.verify(usertoken,"rajesh")
        if(decodedtoken.role=="admin"){
            let user=await UserModel.find()
            res.send({"userdetails":user})
        }else{
            res.send("unauthorised") 
        }
       
        
    } catch (error) {
        console.log(error)
    }
})



//logout=================================
userRouter.get("/logout",async(req,res)=>{
    try {
        let usertoken=await client.get('token');
        let userrefreshtoken=await client.get('refreshtoken');
        let blacklisttoken= new blackmodel({token:usertoken,refreshtoken:userrefreshtoken})
        await blacklisttoken.save()
        //console.log(usertoken,userrefreshtoken,blacklisttoken)
        res.send({"msg":"logout sucessfull"})
        
    } catch (error) {
        console.log(error)
        res.send(error)
    }

})




module.exports={userRouter}



