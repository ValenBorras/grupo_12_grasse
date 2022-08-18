const {body} = require('express-validator')


const email = body('email').notEmpty().withMessage('Campo obligatorio!'); 
const password = body('password').notEmpty().withMessage('Campo obligatorio!'); 
const nombre = body('nombre').notEmpty().withMessage('Campo obligatorio!'); 
const apellido = body('apellido').notEmpty().withMessage('Campo obligatorio!'); 

const validations = [email, password, nombre, apellido]

module.exports = validations; 