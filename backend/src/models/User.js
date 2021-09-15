const { Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required:true
    }
    


})

userSchema.statics.encryptPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password,salt)
}

userSchema.statics.comparePassword = async(password,receivedPassword)=>{
    return await bcrypt.compare(password,receivedPassword)
}

module.exports = model('User',userSchema); 