const redis=require("redis")
require("dotenv").config()

const password=process.env.redis_password

const redisClient= redis.createClient({url:`redis://default:${password}@redis-12641.c301.ap-south-1-1.ec2.cloud.redislabs.com:12641`})


redisClient.on("connect",async()=>{
     console.log("Redis is connected")
})

redisClient.on("error",async(err)=>{

    console.log(err)
})

redisClient.connect()


module.exports=redisClient;