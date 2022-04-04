const User = require('../models/User');
const { hash, compare } = require('bcrypt');
const bsonToJson = (data) => { return JSON.parse(JSON.stringify(data)) };
const removePassword = (data) => {
    const { hashedPassword, __v, ...userData } = data;
    return userData
}

async function register(firstName, lastName, email, password) {
    const existing = await getUserByEmail(email)
    if (existing) {
        throw new Error('Email is taken');
    }

    const hashedPassword = await hash(password, 10);
    const user = new User({
        firstName,
        lastName,
        email,
        hashedPassword,
        orders: []
    });

    await user.save();

    let modifiedUser = removePassword(user);
    modifiedUser = bsonToJson(user);

    return modifiedUser;
}

async function login(email, password) {
    const user = await getUserByEmail(email);

    if (!user) {
        throw new Error('Incorrect Email or Password');
    }

    const validPassword = await compare(password, user.hashedPassword);

    if (!validPassword) {
        throw new Error('Incorrect Email or Password');
    }

    let modifiedUser = removePassword(user);
    modifiedUser = bsonToJson(user);
    return modifiedUser;
}

async function getUserByEmail(email) {
    const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') }).populate('orders');
    return user;
}

async function getProfileInfo(userObj) {
    const user = await User.findOne(userObj, { password: 0, __v: 0 }).populate('orders');
    return user; 
}

async function updateUserOrders(id, userId, value) {
    const user = await User.findById(userId);

    while(value) {
        user.orders.push(id);
        value--
    }
    
    await user.save();
}

module.exports = {
    register,
    login,
    getProfileInfo,
    updateUserOrders
}