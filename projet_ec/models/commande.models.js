const mongoose = require('mongoose');

const commandeSchema=new mongoose.Schema({

id_User:{
    type:mongoose.Types.ObjectId,
    ref:"User"
},

date:{
    type: 'string',
    default:Date.now()
},
Id_product:{
    type:mongoose.Types.ObjectId,
    ref:"Product"
},

price:{
    type: 'string'
},
})

module.exports.commande=mongoose.model("commande", commandeSchema);