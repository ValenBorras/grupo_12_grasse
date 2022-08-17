const User = require('../models/Users.model');

const controller = {
    register:(req,res)=>{
        return res.render('register')
    },
    
    processRegister:(req,res)=>{

//        const resultValidation = validationResult(req);

//        if (resultValidation.errors.length > 0) {
//            return res.render('register',{
//                errors: resultValidation.mapped(),
//                oldData: req.body
//            });
//        }

        User.create(req.body);
        return res.redirect('/')
    },

    login: (req,res)=>{
        return res.render('login')
    },
}

module.exports = controller;
