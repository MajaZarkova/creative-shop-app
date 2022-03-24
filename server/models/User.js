const { Schema, model, Types: { ObjectId } } = require('mongoose');
//TODO: change Schema by the requirements
//TODO: add Validation

const NAME_PATTERN = /^[A-Za-z-]+$/;
const EMAIL_PATTERN = /^([A-Za-z]+)@([A-Za-z]+)\.([A-Za-z]+)$/;
const IMAGE_PATTERN = /^https?:\/\/(.+)/;

const userSchema = new Schema({
    username: { type: String, required: [true, 'Username is required'] },
    hashedPassword: { type: String }
});

userSchema.index({ username: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);
module.exports = User;