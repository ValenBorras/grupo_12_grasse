const {Router} = require("express")
const router = Router()
const controller = require("../controllers/products.controller")

router.get("/detalle",controller.detalle)
router.get("/carrito",controller.carrito)
router.get("/create",controller.create)
router.get('/edit',controller.edit)


module.exports = router;  