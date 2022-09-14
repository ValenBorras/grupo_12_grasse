const {Router} = require("express");
const router = Router();
const controller = require('../controllers/index.controller')


router.get("/testimonios", controller.testimonios);
router.get("/preguntas", controller.faqs);


module.exports = router;