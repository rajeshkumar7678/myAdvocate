
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    Name : { type : String, required : true },
    Email : { type : String, required : true, unique : true },
    Password : { type : String, required : true },
   
    Role : { type : String, enum : ["User", "Lawyer"], required : true, default : "User" },
    Apointsment:[]

}, {
    versionKey : false,
    timestamps :true
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
    UserModel
}



    
 


