const {Router} = require("express");
const router = Router();
const controller = require('../controllers/users.controller');
const validationsRegister = require('../validations/register');
const validationsLogin = require('../validations/login');
const guestMiddleware = require('../middlewares/guest.middleware');
const authMiddleware = require('../middlewares/auth.middleware');


//multer

const upload = require('../middlewares/multer');

//rutas

router.get('/Registro',guestMiddleware, controller.register); // vista formulario de registro

router.post('/Registro', upload.single('img'), validationsRegister, controller.processRegister); // procesar registro

router.get('/Ingreso', guestMiddleware, controller.login); // vista login

router.post('/Ingreso', controller.loginProcess); //procesar login

router.get('/Perfil', authMiddleware, controller.profile); // perfil de usuario

router.get('/Cerrar-sesion', controller.logout); //logout (PENDIENTE POR REALIZAR LA REDIRECCION DESDE VISTA)

module.exports = router;