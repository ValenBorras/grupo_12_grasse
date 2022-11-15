const {Router} = require("express");
const router = Router();
const controller = require("../../controllers/api/usersApi");

router.get('/api/users', controller.all);
router.get('/api/users/:id',controller.detail);

module.exports = router

