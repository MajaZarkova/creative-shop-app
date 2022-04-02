const router = require('express').Router();
const { isGuest, isUser } = require('../middleware/guards');
const { getProducts, getOneProduct, createProduct, getRecentProducts, deleteProduct, editProduct, getUserProducts } = require('../services/productService');
const mapErrors = require('../util/mapper');

router.get('/products', async (req, res) => {
    const limit = req.query.limit || 0;

    try {
        const recentProducts = await getRecentProducts(limit);
        res.status(200).json(recentProducts);
    } catch (error) {
        console.log(mapErrors(error));
    }
})

router.get('/products', async (req, res) => {
    try {
        const products = await getProducts();
        res.status(200).json(products)
    } catch (error) {
        console.log(mapErrors(error));
    }
});

router.get('/products/:id', async (req, res) => {
    const productId = req.params.id;
    const product = await getOneProduct(productId);
    res.status(200).json(product);
});

router.get('/user/products/:userId', async (req, res) => {
    const userId = req.params.userId;
    const products = await getUserProducts(userId);
    res.status(200).json(products);
})

router.post('/products', async (req, res) => {
    const data = {
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price,
        seller: req.session.user?._id,
        image: req.body.image,
        quantity: req.body.quantity,
        category: req.body.category,
    };

    try {
        const product = await createProduct(data);
        res.status(200).json(product)
    } catch (error) {
        console.log(mapErrors(error))
    }

});

router.delete('/delete/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        await deleteProduct(productId);
        res.status(200).json({});
    } catch (error) {
        console.log(mapErrors(error))
    }
})

router.put('/edit/:id', async (req, res) => {
    const productId = req.params.id;
    const data = {
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price,
        seller: req.session.user?._id,
        image: req.body.image,
        quantity: req.body.quantity,
        category: req.body.category,
    };
    try {
        const product = await editProduct(productId, data);
        res.status(200).json(product);
    } catch (error) {
        console.log(mapErrors(error))
    }
})

module.exports = router;