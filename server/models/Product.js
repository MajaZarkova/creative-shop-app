const { Schema, model, Types: { ObjectId } } = require('mongoose');
//TODO: change Schema by the requirements
//TODO: add Validation

const IMAGE_PATTERN = /^https?:\/\/(.+)/;

const productSchema = new Schema({
    productName: {
        type: String,
        // required: [true, 'Product name is required']
    },
    description: {
        type: String,
        // required: [true, 'Description is required']
    },
    price: {
        type: Number,
        // required: [true, 'Price is required'], min: 0
    },
    seller: { type: ObjectId, ref: "User" },
    image: {
        type: String,
        // required: true, validate: {
        //     validator(value) {
        //         return IMAGE_PATTERN.test(value);
        //     },
        //     message: 'The product picture should start with http:// or https://'
        // }
    },
    quantity: {
        type: Number,
        // min: [1, 'Quantity can not be less than 1']
    },
    category: {
        type: String,
        // required: true
    }
});

const Product = model('Product', productSchema);
module.exports = Product;