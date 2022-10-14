const {Router} = require("express")
const router = Router()
//const controller = require("../controllers(old)/products.controller")
const controller = require("../controllers/productsController")

const upload = require('../middlewares/multer');

router.get('/', controller.list);

router.get("/detalle/:product", controller.detail);

router.get("/carrito", controller.carrito);

router.get("/crearproducto", controller.create);

router.post('/crearproducto', upload.single('img'), controller.createProcess);

router.get('/detalle/editar/:product', controller.edit);

router.put('/detalle/editar/:product', upload.single('img'), controller.editProcess);

router.delete('/detail/remove', controller.remove);



module.exports = router;  