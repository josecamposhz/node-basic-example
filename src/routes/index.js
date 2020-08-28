const { Router } = require('express');
const router = Router();

// Controllers
const ProductController = require('../controllers/ProductController');

// Middlewares
const checkEmptyFields = require('../middlewares/checkEmptyFields');

router.get('/products', ProductController.all);

router.get('/products/:id', ProductController.find);

router.post('/products', checkEmptyFields, ProductController.create);

router.put('/products', checkEmptyFields, ProductController.update);

router.delete('/products', ProductController.delete);

module.exports = router;