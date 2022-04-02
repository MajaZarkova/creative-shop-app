const router = require('express').Router();
const { isGuest, isUser } = require('../middleware/guards');
const { register, login } = require('../services/userService');
const mapErrors = require('../util/mapper');

router.post('/register', async (req, res) => {
    const {firstName, lastName, email, password, rePassword } = req.body;

    try {
        if (firstName.trim() == ''|| lastName.trim() == '' || password.trim().length < 8) {
            throw new Error('First Name and Last Name are required and password must be at least 8 characters long');
        }

        if (password != rePassword) {
            throw new Error('Passwords don\'t match');
        }

        const user = await register(firstName, lastName, email, password);
        req.session.user = user;
        res.status(200).send(user);
    } catch (err) {
        console.log(mapErrors(err));
        res.status(401).send(mapErrors(err));
    }
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
       const user = await login(email, password);
       req.session.user = user;
       res.status(200).send(user);
    } catch (err) {
        console.log(mapErrors(err));
        res.status(401).send(mapErrors(err));
    }
});

router.post('/logout', (req, res) => {
    delete req.session.user;
    res.status(200).json({});
})

router.get('/user/profile', (req, res) => {
    req.session.user ? res.json(req.session.user) : res.send(null);
})

module.exports = router;