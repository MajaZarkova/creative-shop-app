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

        const user = await register(firstName, lastName, email, password);
        const token = jwt.createToken({ id: user._id });

        res.cookie(authCookieName, token, { httpOnly: true });
        req.session.user = user;
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

        // req.session.cookie.user = user;
        res.cookie(authCookieName, token, { httpOnly: true })
        res.status(200).send(user);
    } catch (err) {
        console.log(mapErrors(err));
        res.status(401).send(mapErrors(err));
    }
});

router.post('/logout', (req, res) => {
    const token = req.cookies[authCookieName];
    // delete req.session.cookie.user;
    TokenBlacklistModel.create({ token })
        .then(() => {
            res.clearCookie(authCookieName)
                .status(204)
                .send({ message: 'Logged out!' });
        })
        .catch(err => res.send(err));

    // res.status(200).json({});
})

router.get('/user/profile', auth(), async (req, res) => {
    console.log(req.cookies[authCookieName]);
    const { _id: userId } = req.user;
    const user = await getProfileInfo({ _id: userId });
    res.status(200).json(user);
})

module.exports = router;