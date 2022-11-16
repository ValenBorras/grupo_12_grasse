let db = require('../database/models/index')

module.exports = {
    list:(req,res)=>{
        db.Product.findAll()
        .then((products) => {
            return res.render('index',{products:products})
        }).catch((err) => {
            res.render('not-found',{err:err})
        });
    },

    detail:(req,res)=>{
        db.Product.findOne({
            where:{
                id:req.params.product
            }
        }).then((product) => {
            if(product){
                return res.render('products/detail',{product:product});
            }else{
                return res.render('products/detail',{product:null})
            }
        }).catch((err) => {
            console.log(err)
        });
    },

    carrito:(req,res)=>{
        res.render('cart')
    },

    create:(req,res)=>{
        res.render('products/create')
    },

    createProcess: (req,res)=>{
        db.Product.create({
           name: req.body.name,
           category_id: req.body.category,
           presentation_id: req.body.presentation,
           price: parseFloat(req.body.price),
           description: req.body.description,
           img: '/images/' + req.file.filename, 
        });

       res.redirect('/')
    },

    edit:(req,res)=>{
        db.Product.findOne({
            where:{
                id:req.params.product
            }
        }).then((product) => {
                return res.render('products/edit',{product:product});
        }).catch((err) => {
            console.log(err)
        });
    },

    editProcess:(req,res)=>{
         db.Product.update({
            name: req.body.name,
            category_id: req.body.category,
            presentation_id: req.body.presentation,
            price: parseFloat(req.body.price),
            description: req.body.description,
            img: req.file ? '/users/' + req.file.filename : req.body.filename
        }, 
        {
            where:{id: req.body.id}
        })
        res.redirect('/')
    },

    remove:(req,res)=>{
        db.Product.destroy({
            where:{id:req.body.id}
        }
        );
        res.redirect('/')
    }
    
}