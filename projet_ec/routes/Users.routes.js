// routes pour les commandes
const express=require('express');
const {signin,sigup,updUsers} =require('../controllers/Users.controller');
const { commande,remcommande } = require('../controllers/commande.controller');
const routerU =express.Router()

//  pour faire une commande

routerU.route("/Users.controller/",).post(signin);

// inscription

routerU.post("/inscription/:idproduits",sigup)
routerU.post("/mettre à jour/:idUsers, updUsers")

module.exports= routerU