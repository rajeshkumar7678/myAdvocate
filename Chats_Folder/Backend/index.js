////-------Depenencies----------
const express = require("express")
const app = express()
const connection = require("./db")
const messagesRouter = require("./routes/message.routes")
const usersRouter = require("./routes/users.routes")
require("dotenv").config

//------Extra Middleware built-in function
app.use(express.json())

//-------------Routes----------------
app.get("/",(req,res)=>{
    res.send("Chat APP")
})
app.use("/users",usersRouter)
app.use("/message",messagesRouter)


////---------Listening----------------
app.listen(process.env.PORT,async()=>{
        try {
            
        } catch (error) {
            console.log("MongoDB is not connected with Server")
        }
        console.log(`Server is listening on : ${process.env.PORT}`)
})
