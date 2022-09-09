const User = require('../models/Users.model');
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');

const controller = {
    register:(req,res)=>{
        res.cookie("")
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
        img: req.file.filename,
        admin: false
    } 

    let userCreated = User.create(userToCreate);

    res.redirect('/Ingreso')    
    },

    login: (req,res)=>{
        return res.render('users/login')
    },

    loginProcess: (req,res)=>{
     let userToLogin = User.findByField('email', req.body.email);

     if(userToLogin){
        let isOkThePassword =bcryptjs.compareSync(req.body.password,userToLogin.password);
        if (isOkThePassword){
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
            return res.redirect("/Perfil")
        }
        return res.render('users/login',{
            errors:{
                password:{
                    msg:'La contraseña es incorrecta'
                }
            }
        });
     }


        return res.render('users/login',{
            errors:{
                email:{
                    msg:'Este email no esta registrado'
                }
            }
        })
    },
    profile: (req, res)=>{
        return res.render('users/profile', {
            user: req.session.userLogged
        }) 
    },
    logout: (req,res) => {
        req.session.destroy();
        return res.redirect("/");
    }
}

module.exports = controller;
