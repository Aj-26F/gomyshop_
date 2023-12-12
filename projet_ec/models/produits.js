const mongoose = require('mongoose');

const produitsSchema = new mongoose.Schema({

    produits_name:{
        type: 'string', },

    produits_type:{
        type: 'string'},

    produits_number:{
        type: 'number',},

    produits_price:{
        type: 'number'},

})

module.exports.produits= mongoose.model('Produits', produitsSchema);