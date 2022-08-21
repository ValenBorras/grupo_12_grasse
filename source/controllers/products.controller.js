const {all,one,generate, write} = require("../models/products.model");

const controller = {

    index: (req,res)=>{
        let products = all();    
        return res.render('index',{products});
    },
    
    detail: (req,res) => {
        let product = one(req.params.producto);
        if(product){
            return res.render('products/detail',{product});
        }
        return res.render('products/detail', {product:null});
    },

    carrito : (req,res)=> {
        res.render("cart")
    },

    create: (req,res)=> {
        return res.render("products/create")
    },

    createProcess: (req,res) => {
        let nuevo = generate(req.body)
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
        let actualizados = todos.map(elemento => {
            if(elemento.id == req.body.id){
                elemento.name = req.body.name;
                elemento.price = parseInt(req.body.price);
                elemento.category = req.body.category;
                elemento.image = req.files && req.files.length > 0 ? req.files[0].filename : elemento.image;
                let product = one(req.body.id);
                if(product.image != 'default.png'){
                    let file = resolve(__dirname,'..','..','public','products',product.image);
                    unlinkSync(file);
                }
            }
            return elemento
        })
        write(actualizados)
        return res.redirect('/')
    }
    
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