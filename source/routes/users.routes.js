const {Router} = require("express");
const router = Router();
const controller = require('../controllers/users.controller');

const validationsRegister = require('../validations/register');
const validationsLogin = require('../validations/login');

//multer

const upload = require('../middlewares/multer');

//rutas

router.get('/register', controller.register);

router.post('/register', upload.single('img'), validationsRegister, controller.processRegister);

router.get('/login', controller.login);

router.post('/login', controller.loginProcess);

module.exports = router;