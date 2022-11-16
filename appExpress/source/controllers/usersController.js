const db = require('../database/models/index');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

module.exports = {
    register: (req,res) =>{
        res.render('users/register')
    },

    processRegister: (req,res)=>{
        const result = validationResult(req);
        if(!result.isEmpty()){
            return res.render('users/register',{
                style:'register',
                errors: result.mapped(),
                data:req.body
            })
        }
        let isAdmin = (email)=>{
            if(email.includes('@grasse.com.co')){
                return 1
            }else{
                return 0 
            }
        }
        db.User.create( {
            ...req.body,
            password: bcrypt.hashSync(req.body.password,10),
            img: req.file.filename,
            admin: isAdmin(req.body.email)
        })
        res.redirect('/ingreso')
    },

    login:(req,res)=>{
        res.render('users/login')
    },

    loginProcess:(req,res)=>{
        const result = validationResult(req);
        if(!result.isEmpty()){
            return res.render('users/login',{
                style:'login',
                errors: result.mapped(),
                data:req.body
            })
        }
        db.User.findOne({
            where:{
                email:req.body.email
            }
        }).then((result) => {
                    //delete result.password;
                    req.session.userLogged = result;
                    if(req.body.remUser){
                        res.cookie('userEmail',req.body.email, {maxAge:(10000 * 60) * 60})
                    }
                    return res.redirect('/')
                }).catch((err) => {
                    console.log(err)
                });
    },

    profile:(req,res)=>{
        res.render('users/profile',{
            user: req.session.userLogged
        })
    },

    logout:(req,res)=>{
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    }
}
