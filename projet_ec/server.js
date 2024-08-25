const express = require('express')
require("dotenv").config()
const path = require('path')
const routerU = require('./routes/Users.routes');
const { connecter } = require('./gestionbd');

const app= express();

app.use(express.json())

app.use("Users/",routerU)
app.use("commande/",routerU)
app.use(express.urlencoded({ extended:true }));
app.use("/api/v1", routerU);



app.get("/", (req, res) => {
    console.log("salut");});




connecter(" mongodb://127.0.0.1:27017/" , (erreur)=> {
    if(erreur){
        console.log("erreur lors de la connection à la base de donnée");
        process.exit(-1);}
    else {
        console.log("connection à la base de donnée reussie");}
    })


app.listen(3000)
console.log("server projet running... ")


