const { Schema, model, Types: { ObjectId } } = require('mongoose');

const NAME_PATTERN = /^[A-Za-z-0-9]+$/;
const EMAIL_PATTERN = /^([A-Za-z0-9\.-]+)@([A-Za-z]+)\.([A-Za-z]+)$/;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        minlength: [3, 'Frst Name must be at least 4 charachters long!'],
        validate: {
            validator: function (value) {
                return NAME_PATTERN.test(value);
            },
            message: 'First Name must contaion only latin letters and digits'
        }
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
        minlength: [4, 'Last Name must be at least 4 charachters long!'],
        validate: {
            validator: function (value) {
                return NAME_PATTERN.test(value);
            },
            message: 'Last Name must contaion only latin letters and digits'
        }
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: {
            validator: function (value) {
                return EMAIL_PATTERN.test(value);
            },
            message: 'Email is not valid!'
        }
    },
    hashedPassword: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long!']
    },
    orders: [{
        type: ObjectId,
        ref: "Product"
    }],
    productsListed: [{
        type: ObjectId,
        ref: "Product"
    }]
});

userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);
module.exports = User;