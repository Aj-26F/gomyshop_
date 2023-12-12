// routes pour les commandes
const express=require('express');
const {commande, remCommande} =require('..controllers/commande.controllers')
const routerD=express.router()

//  pour faire une commande

routerD.post("/commande/:idproduits",commande)

// Annuler une commande

routerD.post("/commande/:idproduits,rem.commande")

module.exports=routerD