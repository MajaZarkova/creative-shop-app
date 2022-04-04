const Product = require('../models/Product');

async function createProduct(data) {
    const product = new Product(data);
    await product.save();
    return product;
}

async function getProducts() {
    const products = await Product.find({}).populate('seller');

    return products;
}

async function getRecentProducts(limit) {
    const recentProducts = await Product.find({}).sort({ _id: -1}).limit(limit).populate('seller');
    return recentProducts;
}

async function getUserProducts(seller) {
    const products = await Product.find({ seller }).populate('seller', 'firstname lastname');

    return products;
}

async function getOneProduct(id) {
    const product = await Product.findById(id).populate('seller');

    if (product) {
        return product;
    } else {
        throw new Error('Product doesn\'t exist')
    }
}

async function editProduct(id, data) {
    const product = await Product.findByIdAndUpdate(id, data, { runValidators: true });
    return product
}

async function deleteProduct(id) {
    await Product.findByIdAndDelete(id);
}

async function updateProduct(id, value) {
    const product = await Product.findById(id);

    if (product.quantity == 0) {
        throw new Error('Product is out of stock!');
    }

    if (product.quantity - value < 0) {
        throw new Error('There are not enough items in stock!');
    }

    product.quantity -= value;

    await product.save();
}

module.exports = {
    createProduct,
    getProducts,
    getOneProduct,
    getRecentProducts,
    editProduct,
    deleteProduct,
    getUserProducts,
    updateProduct
}