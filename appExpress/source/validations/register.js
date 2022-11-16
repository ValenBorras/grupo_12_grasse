const {body} = require('express-validator');
const db = require("../database/models/index");



const email = body('email')
.notEmpty().withMessage('Campo obligatorio!').bail()
.isEmail().withMessage('Correo electronico no valido').bail()
.custom((value, {req}) => {
  return db.User.findOne({
        where:{
            email:req.body.email
        }
    }).then((result)=>{
        if (result){
            throw new Error('Este email ya esta registrado')
        }
    }).catch((err)=>{
        throw new Error('Este email ya esta registrado')
    })


}); 

const password = body('password').notEmpty().withMessage('Campo obligatorio!'); 
const name = body('name').notEmpty().withMessage('Campo obligatorio!'); 
const surname = body('surname').notEmpty().withMessage('Campo obligatorio!');
const img = body('img').custom((value, {req}) =>{
    let file = req.file; 
    if (!file){
        throw new Error('Campo obligatorio!');
    }
    return true
})  

const validationsRegister = [email, password, name, surname,img]

module.exports = validationsRegister; 