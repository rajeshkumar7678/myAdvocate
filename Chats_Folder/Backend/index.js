////-------Depenencies----------
const express = require("express")
const app = express()
const messagesRouter = require("./routes/message.routes")
const usersRouter = require("./routes/users.routes")
const socket = require("socket.io")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

// Connected with mongoDB
mongoose.connect(process.env.mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then(()=>{
    console.log("MongoDB is connected with Server")
 }).catch((err)=>{
    console.log("MongoDB is not connected with Server")
 })

//Server running 
const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on : ${process.env.PORT}`)
})
//------Extra Middleware built-in function
app.use(express.json())
app.use(cors())
//-------------Routes----------------
app.get("/",(req,res)=>{
    res.send("Chat APP")
})
app.use("/users",usersRouter)
app.use("/message",messagesRouter)
global.onlineUsers = new Map()
 const io = socket(server,{
    cors:{
        origin:"http://localhost:3000",
        credentials:true
    }
 })


io.on("connection",(socket)=>{
    console.log("Connected Successfully")
})
 