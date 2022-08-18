const {Router} = require("express");
const router = Router();
const controller = require('../controllers/users.controller');

const validations = require('../validations/register');

//multer

const upload = require('../middlewares/multer');

//rutas

router.get('/register', controller.register);

router.post('/register', upload.any('users'), validations, controller.processRegister);

router.get('/login', controller.login);

module.exports = router;