const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   username: {Type:String, required:true,min:2,max:45},
   email: {Type:String,required:true, unique:true},
   password:{Type:String,required:true, min:5},

   role: {
    type: String,
    enum: ['lawyer', 'user'],
    default: 'user'
},
   

})


const userModel = mongoose.model('user', userSchema);

module.exports = { userModel };


    
 


