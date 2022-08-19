const {all,one,generate, write} = require("../models/products.model");

const controller = {
    
    detalle: (req,res) => {
        res.render("./products/detail")
    },

    carrito : (req,res)=> {
        res.render("cart")
    },

    create: (req,res)=> {
        return res.render("./products/create")
    },

    edit : (req,res)=> {
        res.render('./products/edit')
    },
    
    /*index: (req,res) => {

        let products = all()

        if(req.params.categoria) {
            products = products.filter(e => e.category == req.params.controller)
            return res.render("list")
        }
    },
    show: (req,res)=> {
        let product = one(req.params.producto)
        if(product) {
            return res.render("detail",{product})
        }
        return res.render("detail",{product:null})
    },
    
    save: (req,res) => {
        let nuevo = generate(req.body)
        let todos = all()
        todos.push(nuevo)
        write(todos)
        return res.redirect("/productos")
    }*/
}

module.exports = controller;