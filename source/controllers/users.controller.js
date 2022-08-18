const User = require('../models/Users.model');
const {validationResult} = require('express-validator');

const controller = {
    register:(req,res)=>{
        return res.render('users/register')
    },
    
    processRegister:(req,res)=>{
       const result =  validationResult(req);

       if(!result.isEmpty()){
        return res.render('users/register',{
            style:'register',
            errors: result.mapped(), 
            data: req.body
        })
    }

    },

    login: (req,res)=>{
        return res.render('users/login')
    },
}

module.exports = controller;
