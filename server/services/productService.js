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

// async function vote(id, userId, value) {
//     const Product = await Product.findById(id);

//     if (Product.votes.includes(userId)) {
//         throw new Error('User already voted!');
//     }

//     Product.votes.push(userId);
//     Product.rating += value;
//     await Product.save();
// }

module.exports = {
    createProduct,
    getProducts,
    getOneProduct,
    getRecentProducts,
    editProduct,
    deleteProduct,
    getUserProducts
}