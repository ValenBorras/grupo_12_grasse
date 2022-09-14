const {Router} = require("express")
const router = Router()
const controller = require("../controllers/products.controller")

const upload = require('../middlewares/multer');

router.get('/', controller.index);

router.get("/detalle/:product", controller.detail);

router.get("/carrito", controller.carrito);

router.get("/crearproducto", controller.create);

router.post('/save', upload.single('img'), controller.createProcess);

router.get('/detalle/editar/:product', controller.edit);

router.put('/update', upload.single('img'), controller.editProcess);

router.delete('/detail/remove', controller.remove);

module.exports = router;  