const { commande }= require("../models/commande.models"); 

module.exports.commande=async (req,res) => {

    // soit cc les attributs  de la commande
const cc=req.body;  
const user_Id = req.params.user_Id; 
const produits_Id= req.params.produits_Id; 


    try{ 
        const newcc={
            Users_Id: user_Id,
            produits_Id:produits_Id,
            produits_name:produits_name,
            produits_price:produits_price,
            produits_numbers:produits_numbers,


                     }

const o= new commande(newcc)
   await o.save()
return res.send("commande acceptée")

       }

    catch(err){
        console.log(erreur) 
                }

}

// attributs pour annuler une commande

module.exports.remcommande=async(req,res) => {

    const commande_ID=req.params.commande_id;

    try{

        commande.findByIdAndDelete(commande_ID).then(() => {
            return res.send("supprime")})
    }
    catch(err){}
}

