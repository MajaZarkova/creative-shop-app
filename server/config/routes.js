const authController = require('../controllers/auth');
const productController = require('../controllers/product');

module.exports = (app) => {
    app.use(authController);
    app.use(productController);
}