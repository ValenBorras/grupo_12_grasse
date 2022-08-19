const User = require('../models/Users.model');
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');

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

     let userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password,10),
        img: req.file.filename
    } 

    let userCreated = User.create(userToCreate);

    res.redirect('/login')

    
    },

    login: (req,res)=>{
        return res.render('users/login')
    },

    loginProcess: (req,res)=>{
        return res.send(req.body)
    }
}

module.exports = controller;
