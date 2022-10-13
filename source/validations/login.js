const {body} = require('express-validator');
const db = require("../database/models/index");
const bcrypt = require('bcryptjs');

const email = body('email')
.notEmpty().withMessage('Campo obligatorio!').bail()
.isEmail().withMessage('Correo electronico no valido').bail()
.custom((value, {req}) => {
   return  db.User.findOne({
        where:{
            email:req.body.email
        }
    }).then((result)=>{
        if (result = 0){
            throw new Error('Este email no esta registrado')
        }
    }).catch((err)=>{
        throw new Error('Este email no esta registrado')
    })

}); 

const password = body('password').notEmpty().withMessage('Campo obligatorio!').bail()
.custom((value, {req}) =>{
    
   return db.User.findOne({
        where:{
            email:req.body.email
        }
    }).then((result) => {
        
        let passwordOk = bcrypt.compareSync(req.body.password,result.password);
        if(!passwordOk){
        throw new Error('Contraseña incorrecta')
        }
        return true 
    }).catch((err) => {
        throw new Error('Contraseña incorrecta')
    })
}); 

const validationsLogin = [email, password]



module.exports = validationsLogin; 