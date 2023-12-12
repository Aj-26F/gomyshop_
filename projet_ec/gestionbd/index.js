// gerer la connection avec la base de données
const mongoose = require('mongoose')
const path = require('path')
const url ='http://'
Mongoose.connect(url,{}).then(()=>{
    console.log('connectée à la base de données')
})
.catch((err)=> {console.log(erreur)})