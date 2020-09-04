const { Router } = require('express');
const router = Router();

// Controllers
const ProductController = require('../controllers/ProductController');

// Middlewares
const checkEmptyFields = require('../middlewares/checkEmptyFields');

router.get('/', (req, res) => {
    res.send('Raiz API')
});

router.get('/products', ProductController.all);

router.post('/products', checkEmptyFields, ProductController.create);

router.put('/products/:id', checkEmptyFields, ProductController.update);

router.get('/products/:id', ProductController.find);

router.delete('/products/:id', ProductController.delete);

module.exports = router;