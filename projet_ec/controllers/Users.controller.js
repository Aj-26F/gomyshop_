const { users } =require("../models/Users");
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken")
module.exports.sigup= async (req,res)=>{
const i_Users=req.body
const { password } = req.body;

const passCrypt= await bcrypt.hash(password,8)

try{
    const o_Users= new users( {...i_Users, password: passCrypt });
o_Users.save()
return res,send( "ok")

}
catch(err){ console.log(erreur)}

}


module.exports.signin= async( req,res) =>{
   const {password, email}=req.body;

   const i_Users=await Users.findOne({email})
   const passMatch=bcrypt.compare(password, i_Users, password)
   if(i_Users && passMatch) {
    const playload={
        name:i_Users.name,
        email:i_Users.email,
        id:i_Users.id,
    }
    
    
    
    const token= jwt.sign(playload,'exemple',{expireIn:'24h'})
    return res.send({ token})
}
}

module.exports.updateUsers= async( req,res ) =>{
const id_Users=req.params.idUsers;
const i_Users=req.body;

const passCrypt=bcrypt.hash(id_Users?.password, 8)
Object.assign(i_Users, {password:passCrypt})

Users.findAndUpdate(id_Users,{$set:{i_Users}} , {new:true}).then(
    (U) => { return res.send ({U})},
)
}