const {Router} = require("express")
const router = Router()
const controller = require("../controllers/products.controller")

const upload = require('../middlewares/multer');

router.get('/', controller.index);

router.get("/home/detail/:product", controller.detail);

router.get("/Carrito", controller.carrito);

router.get("/Crear-producto", controller.create);

router.post('/save', upload.single('img'), controller.createProcess);

router.get('/home/detail/edit/:product', controller.edit);

router.put('/update', upload.single('img'), controller.editProcess);

router.delete('/detail/remove', controller.remove);

module.exports = router;  