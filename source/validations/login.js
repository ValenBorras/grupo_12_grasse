const {body} = require('express-validator');
const User = require('../models/Users.model');



const email = body('email')
.notEmpty().withMessage('Campo obligatorio!').bail()
.isEmail().withMessage('Correo electronico no valido').bail()
.custom((value, {req}) => {
    let userToLogin = User.findByEmail(req.body.email);

    if (userToLogin){
        throw new Error('Este email no esta registrado')
    }
    return true
}); 

const password = body('password').notEmpty().withMessage('Campo obligatorio!'); 


const validationsLogin = [email, password]



module.exports = validationsLogin; 