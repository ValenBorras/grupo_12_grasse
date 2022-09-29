const {all,one,generate, write} = require("../models/postBlog.model");
const {unlinkSync} = require('fs');
const {resolve,path} = require('path');

const controller = {

    blog: (req,res)=>{
        let products = all();    
        return res.render('blog',{postBlog});
    },
    
    detail: (req,res) => {
        let post = one(req.params.post);
        if(post){
            return res.render('postBlog',{post});
        }else{
        return res.render('postBlog', {post:null})
        };
    },

    create: (req,res)=> {
        return res.render("products/create")
    },

    createProcess: (req,res) => {
        let nuevo = generate(req.body)
        nuevo.img = '/users/' + req.file.filename
        let todos = all()
        todos.push(nuevo)
        write(todos)
        return res.redirect("/")
    },

    edit : (req,res)=> {
        let product = one(req.params.product);
        res.render('products/edit',{product})
    },

    editProcess: (req,res)=>{
        let todos = all();
        let actualizados = todos.map(e => {
            if(e.id == req.body.id){
                e.name = req.body.name;
                e.price = 'COP$' + parseInt(req.body.price);
                e.category = req.body.category;
                e.img = req.file ? '/users/' + req.file.filename : e.img;
/*                 let product = one(req.body.id);
                if(product.img != 'default.png'){
                    let file = resolve(__dirname,'..','..','public','products',product.image);
                    unlinkSync(file);
                } */
            }
            return e
        })
        write(actualizados)
        return res.redirect('/')
    },
    remove: (req,res)=>{
/*         let product = one(req.params.product);
        if(product.image != 'default.png'){
            let file = resolve(__dirname,'..','..','public','products',product.image);
            unlinkSync(file);
        } */
        let todos = all();
        let noEliminados = todos.filter(e => e.id != req.body.id)
        write(noEliminados);
        return res.redirect('/')
    }
}

module.exports = controller;