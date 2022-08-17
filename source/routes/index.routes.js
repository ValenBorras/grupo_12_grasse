const {Router} = require("express");
const router = Router();
const controller = require('../controllers/index.controller')

router.get('/', controller.index);
router.get("/Testimonios", controller.testimonios);


module.exports = router;