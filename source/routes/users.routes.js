const {Router} = require("express");
const router = Router();
const controller = require('../controllers/users.controller');

router.get('/login', controller.login);

router.get('/register', controller.register);

module.exports = router;