const {Router} = require("express")
const router = Router()

router.get('/', (req,res)=> {
    res.render('index')
});

router.get('/detalle', (req,res)=> {
    res.render('detail')
});

router.get('/login', (req,res)=> {
    res.render('login')
});

router.get('/register', (req,res)=> {
    res.render('register')
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