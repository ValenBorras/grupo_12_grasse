const {Router} = require("express")
const router = Router()

router.get('/detalle', (req,res)=> {
    res.render('products/detail')
});

router.get('/carrito', (req,res)=> {
    res.render('cart')
});

router.get('/create', (req,res)=> {
    res.render('products/create')
});

router.get('/edit', (req,res)=> {
    res.render('products/edit')
});

module.exports = router;  