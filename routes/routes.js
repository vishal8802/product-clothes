const router = require('express').Router();
const { category } = require('./controllers/categories/init');
const { product } = require('./controllers/clothes/init');
const { cart } = require('./controllers/cart/init')

router.get('/categories', category.get);
router.post('/categories', category.add);
router.put('/categories', category.update);

router.get('/products', product.get);
router.post('/products', product.add);
router.get('/products/search', product.search);

router.get('/cart',cart.get);
router.post('/cart', cart.add);

module.exports = router;
