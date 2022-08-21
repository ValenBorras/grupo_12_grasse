const {Router} = require("express")
const router = Router()
const controller = require("../controllers/products.controller")

const upload = require('../middlewares/multer');

router.get('/', controller.index);

router.get("/detalle/:product", controller.detail);

router.get("/home/carrito", controller.carrito);

router.get("/create", controller.create);

router.post('/save', upload.single('img'), controller.createProcess);

router.get('/home/detail/edit/:product', controller.edit);

router.put('/update', upload.single('img'), controller.editProcess);

module.exports = router;  