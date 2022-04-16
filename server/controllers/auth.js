const router = require('express').Router();
const { isGuest, isUser } = require('../middleware/guards');
const { register, login, getProfileInfo } = require('../services/userService');
const { jwt, auth } = require('../util');
const TokenBlacklistModel = require('../models/TokenBlacklistModel');
const mapErrors = require('../util/mapper');
const authCookieName = 'auth-cookie';

router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password, rePassword } = req.body;

    try {
        if (firstName.trim() == '' || lastName.trim() == '' || password.trim().length < 8) {
            throw new Error('First Name and Last Name are required and password must be at least 8 characters long');
        }

        if (password != rePassword) {
            throw new Error('Passwords don\'t match');
        }
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);
        const user = await register(firstName, lastName, email, password);
        console.log(user);
        const token = jwt.createToken({ id: user._id });

        res.cookie(authCookieName, token, { httpOnly: true }); 
        res.status(200).send(user);
    } catch (err) {
        console.log(mapErrors(err));
        res.status(401).send(mapErrors(err));
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await login(email, password);
        const token = jwt.createToken({ id: user._id });

        res.cookie(authCookieName, token, { httpOnly: true })
        res.status(200).send(user);
    } catch (err) {
        console.log(mapErrors(err));
        res.status(401).send(mapErrors(err));
    }
});

router.post('/logout', auth(), (req, res) => {
    const token = req.cookies[authCookieName];

    TokenBlacklistModel.create({ token })
        .then(() => {
            res.clearCookie(authCookieName)
                .status(204)
                .send({ message: 'Logged out!' });
        })
        .catch(err => res.send(err));
})

router.get('/user/profile', auth(), async (req, res) => {
    const { _id: userId } = req.user;
    const user = await getProfileInfo({ _id: userId });
    res.status(200).json(user);
})

module.exports = router;