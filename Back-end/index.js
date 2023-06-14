const express=require("express")
require("dotenv").config()
const cors=require("cors")
const {connection}=require("./config/db")
const { lawyerRouter } = require('./routes/lawyerroutes')




const app=express()
const port=process.env.port||4500

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).send("Home page")
})

app.use('/lawyer', lawyerRouter)












app.listen(port,async()=>{
    try {
        await connection
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
    console.log(`server is running on ${port}`)
})