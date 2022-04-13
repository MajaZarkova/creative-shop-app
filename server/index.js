const express = require('express');
const database = require('./config/database');
const routesConfig = require('./config/routes');
const cookieParser = require('cookie-parser');
const cookieSecret = process.env.COOKIESECRET || 'SoftUni';
const cors = require('cors');

start()

async function start() {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser(cookieSecret));
    app.use('/static', express.static('static'));
    app.use(cors({
        origin: ['http://localhost:5555', 'http://localhost:4200', 'https://creative-shop-1da0d.web.app'],
        credentials: true
      }));
  
    await database(app);
    routesConfig(app);

    app.listen(3000, () => console.log('Server started on port 3000'));
}