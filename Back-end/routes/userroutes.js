const express = require('express')
const { UserModel } = require('../models/usermodel')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const {client} = require('../helpers/redis');
const passport = require('passport');
require("dotenv").config()




const userRouter=express.Router()


userRouter.get("/allusers",async(req,res)=>{
    // res.send("user routes")
    try {
        const data =await UserModel.find()
        // console.log(data)
        res.status(200).json({msg:data})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
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

userRouter.post("/admin/register", async(req,res)=>{
    try {
        let {Name,Email,Password,Role}=req.body
        let user=await UserModel.findOne({Email})
        console.log(user)

        if(user){
            return res.status(400).send({"msg":"already exist please login"})
        }

        let hashpasswod= bcrypt.hashSync(Password,6)

        let newuser= new UserModel({Name,Email,Password:hashpasswod,Role})
        
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



//userbyid==========================
userRouter.get("/getdata", async(req,res)=>{
    try {
        let {_id}=req.query
       
        let user=await UserModel.findOne({_id})
        res.send(user)
        
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

//route for query==============================================
userRouter.post("/getback", async (req,res)=>{
    try {
        let data=req.body
        conformmail(data.Name,data.Email)
        res.send("connect you shortly")
    } catch (error) {
        res.send("error.massage")
    }
})

//sending mail===========================
let conformmail=async(Name,Email)=>{
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mr.rajeshkumar7678@gmail.com',
                pass: process.env.googlepassword
            }
        });

        let mailOptions = {
            from: 'mr.rajeshkumar7678@gmail.com',
            to: Email,
            subject: 'For verifecation mail',
            html:`<p>hi ${Name} <br> our team will connect to you shortly </p>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                
            } else {
                console.log('Email sent: ' + info.response);
               
            }
        });
    } catch (error) {
        console.log(error)
    }

}


//googleauth============================================================

userRouter.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

userRouter.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' ,session:false}),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req.user)
    const user=req.user
    let token=jwt.sign({id:user._id,verified:user.ismailverified,role:user.Role},process.env.secretkey,{expiresIn:"6hr"})
    let refreshtoken=jwt.sign({id:user._id,verified:user.ismailverified,role:user.Role},process.env.secretkey,{expiresIn:"6d"})

    client.set('token', token, 'EX', 3600);
    client.set('refreshtoken', refreshtoken, 'EX', 3600);
    res.send("done")
    
    // res.send(`<a href="http://127.0.0.1:5502/Front-End/index.html?userid=${user._id}" id="myid">Loding...🕧</a>
    // <script>
    //     let a = document.getElementById('myid')
    //     a.click()
    //     console.log(a)
    // </script>`)


});

userRouter.get("/getdata", async(req,res)=>{
    try {
        let {_id}=req.query
       
        let user=await UserModel.findOne({_id})
        res.send({"userdetails":user})
        
    } catch (error) {
        console.log(error)
    }
})

userRouter.delete("/delete/:_id",async(req,res)=>{
    try {
        const {_id} = req.params
        await UserModel.findByIdAndDelete(_id)
        res.status(200).status({"msg":"User has been Deleted"})
    } catch (error) {
        res.status(401).send({"msg":error.message})
    }
})
userRouter.patch("/update/:_id",async(req,res)=>{
    try {
        const {_id} = req.params
        const {Name,Role,Email} = req.body
        await UserModel.findByIdAndUpdate(_id,{
             Name,Role,Email
        })
        console.log("Ok")
        res.status(200).status({"msg":"User has been Updated"})
    } catch (error) {
        res.status(401).send({"msg":error.message})
    }
})

module.exports={userRouter}



