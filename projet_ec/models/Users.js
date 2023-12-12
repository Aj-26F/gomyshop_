const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
name:{
    type: 'string'
},
password:{
    type: 'string'
},
email:{
    type: 'string'
},
adress:{
    type: 'string'
},

})

module.exports.User=mongoose.model('User', UserSchema);