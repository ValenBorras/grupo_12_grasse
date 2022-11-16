const db = require("../../database/models")

module.exports = {
    all: (req,res) => {
        db.Product.findAll(
            {
                include: [
                    {model: db.Category, as:'category'},
                    {model: db.Presentation, as:'presentation'}                
                ]
              }
        )
        .then(products => {
            return res.json({
                meta:{
                    status:200,
                    count: products.length,
                    url:req.url
                },
                data: products
            })
        })
    },
    detail: (req,res) => {
        db.Product.findByPk(req.params.id, 
            {
                include: [
                    {model: db.Category, as:'category'},
                    {model: db.Presentation, as:'presentation'}
                ]
              }
            )
        .then(product => {
            return res.json({
                meta:{
                    status:200,
                    url:req.url
                },
                data: product

            })
        })
    },
    last: (req,res) =>{
        db.Product.findAll({  
            limit: 1,
            order: [ [ 'id', 'DESC' ]],                
            include: [
                {model: db.Category, as:'category'},
                {model: db.Presentation, as:'presentation'}
            ]
          })
        .then(prod =>{
            return res.json({
                meta:{
                    status:200,
                    url:req.url
                },
                data: prod[0]
            })
        })
    },
    categories: (req,res)=>{
        db.Category.findAll({
                include: [
                    {model: db.Product, as:'products'}
                ]
              })
        .then(cat=>{
            return res.json({
                meta:{
                    status:200,
                    count: cat.length,
                    url:req.url
                },
                data: cat
            })
        })    
    }   
}
