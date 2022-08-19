const {body} = require('express-validator');
const User = require('../models/Users.model');



const email = body('email')
.notEmpty().withMessage('Campo obligatorio!').bail()
.isEmail().withMessage('Correo electronico no valido')
.custom((value, {req}) => {
    let userInDB = User.findByEmail(req.body.email);

    if (userInDB){
        throw new Error('Este email ya esta registrado')
    }
    return true
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