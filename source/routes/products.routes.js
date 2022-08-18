const {Router} = require("express")
const router = Router()
const controller = require("../controllers/products.controller")


router.get("/detalle",controller.detalle)
router.get("/carrito",controller.carrito)
router.get("/create",controller.create)
router.get('/edit',controller.edit)

/*<<<<<<< HEAD

=======
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
>>>>>>> 5eccb36460eadbfee634f979822f71e78ea86b7d*/

module.exports = router;  