const {Router} = require("express");
const router = Router();
const controller = require('../controllers/indexController')


router.get("/testimonios", controller.testimonios);
router.get("/preguntas", controller.faqs);
router.get("/blog",controller.blog);


module.exports = router;