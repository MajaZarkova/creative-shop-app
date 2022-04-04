const mongoose = require('mongoose');
const User = require('../models/User');
const Product = require('../models/Product');
const tokenBlackListModel = require('../models/TokenBlacklistModel');

const connectionString = 'mongodb://localhost:27017/creativeshop';

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connected');

        mongoose.connection.on('error', (err) => {
            console.error('Database error');
            console.error(err);
        });

    } catch (err) {
        console.log('Database error');
        console.log(err);
    }
}

