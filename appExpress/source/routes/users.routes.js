const {Router} = require("express");
const router = Router();
const controller = require('../controllers/usersController');
const validationsRegister = require('../validations/register');
const validationsLogin = require('../validations/login');
const guestMiddleware = require('../middlewares/guest.middleware');
const authMiddleware = require('../middlewares/auth.middleware');



//multer

const upload = require('../middlewares/multer');

//rutas

router.get('/registro',guestMiddleware, controller.register); // vista formulario de registro

router.post('/registro', upload.single('img'), validationsRegister, controller.processRegister); // procesar registro

router.get('/ingreso', guestMiddleware, controller.login); // vista login

router.post('/ingreso', validationsLogin, controller.loginProcess); //procesar login

router.get('/perfil', authMiddleware, controller.profile); // perfil de usuario

router.get('/salir', controller.logout); //logout (PENDIENTE POR REALIZAR LA REDIRECCION DESDE VISTA)

router.delete('/eliminar', controller.remove);

module.exports = router;