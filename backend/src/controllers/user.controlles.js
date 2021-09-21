const userCtrl = {};
const config = require('../config')
const User = require("../models/User");
const jwt = require('jsonwebtoken')

userCtrl.signIn = async (req,res)=>{
    const { username, password } = req.body;
    const userFound = await User.findOne({username:username})
    if(!userFound){
        return res.json({message:"Usuario no encontrado"})
    }else{

        const matchPassword = await User.comparePassword(password,userFound.password)
        if(!matchPassword) {
            return res.json({token:null, message:"Contraseña Inválida"})
        }else{
            const token = jwt.sign({id:userFound._id},config.SECRET,{
                expiresIn: 86400
            })
            return res.json({token})

        }
    }
        
    

}
module.exports = userCtrl;