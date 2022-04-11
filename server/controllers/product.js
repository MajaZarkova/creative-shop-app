const router = require('express').Router();
const { isGuest, isUser } = require('../middleware/guards');
const { auth } = require('../util')
const { getProducts, getOneProduct, createProduct, getRecentProducts, deleteProduct, editProduct, getUserProducts, updateProduct } = require('../services/productService');
const { updateUserOrders } = require('../services/userService');
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

router.get('/user/products', auth(), async (req, res) => {
    const {_id: userId} = req.user;
    const products = await getUserProducts(userId);
    res.status(200).json(products);
})

router.post('/products', auth(), async (req, res) => {
    const {_id: userId} = req.user;
    const data = {
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price,
        seller: userId,
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

router.delete('/delete/:id', auth(), async (req, res) => {
    const productId = req.params.id;
    try {
        await deleteProduct(productId);
        res.status(200).json({});
    } catch (error) {
        console.log(mapErrors(error))
    }
})

router.put('/edit/:id', auth(), async (req, res) => {
    const productId = req.params.id;
    const {_id: userId} = req.user;
    const data = {
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price,
        seller: userId,
        image: req.body.image,
        quantity: req.body.quantity,
        category: req.body.category,
    };
    try {
        const product = await editProduct(productId, data, userId);
        res.status(200).json(product);
    } catch (error) {
        console.log(mapErrors(error))
    }
})

router.put('/order/:id', auth(), async (req, res) => {
    const productId = req.params.id;
    const {_id: userId} = req.user;
    const value = req.body.quantity;

    try {
        await updateProduct(productId, value, userId);
        await updateUserOrders(productId, userId, value)
        res.status(200).json({});
    } catch (error) {
        console.log(mapErrors(error))
    }
})

module.exports = router;