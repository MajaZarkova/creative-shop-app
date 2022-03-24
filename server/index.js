const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const database = require('./config/database');
const routesConfig = require('./config/routes');
const userSession = require('./middleware/userSession');
const cors = require('cors');

start()

async function start() {
    const app = express();
    app.engine('.hbs', handlebars.create({
        extname: '.hbs'
    }).engine);
    app.set('view engine', 'hbs');

    app.use(session({
        secret: 'my super duper secret',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: 'auto' }
    }));
    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.use(userSession());
    app.use(cors({
        origin: ['http://localhost:5555', 'http://localhost:4200'],
        credentials: true
      }));
  
    await database(app);
    routesConfig(app);

    app.listen(3000, () => console.log('Server started on port 3000'));
}