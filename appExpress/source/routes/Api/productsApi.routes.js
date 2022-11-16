const {Router} = require("express");
const router = Router();
const controller = require("../../controllers/api/productsApi");

router.get('/api/products', controller.all);
router.get('/api/products/:id',controller.detail);
router.get('/api/last',controller.last);
router.get('/api/categories',controller.categories);

module.exports = router