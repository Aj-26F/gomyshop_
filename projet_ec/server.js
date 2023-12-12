const express = require('express')
require("dotenv").config()
const path = require('path')
const routerU = require('./routes/Users.routes')
const PORT=process.env.PORT ||3000
const app= express()

app.use(express.json())

app.use("Users/",routerU)
app.use("commande/",routerU)





app.listen(PORT,()=>{
    console.log("server projet running...")

})
