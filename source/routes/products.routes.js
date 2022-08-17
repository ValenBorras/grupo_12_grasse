const {Router} = require("express")
const router = Router()

router.get('/detalle', (req,res)=> {
    res.render('detail')
});

router.get('/carrito', (req,res)=> {
    res.render('cart')
});

router.get('/create', (req,res)=> {
    res.render('create')
});

router.get('/edit', (req,res)=> {
    res.render('edit')
});

module.exports = router;  