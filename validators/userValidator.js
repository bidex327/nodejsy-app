const joi = require ('joi');


const UserValidator = joi.object({
    fullName : joi.string().min(3).max(100).required(),
    email: joi.string().email().required(),
    phoneNumber: joi.string().optional().min(1).max(15),
    password: joi.string().min(6).max(15).required()
})

module.exports = UserValidator;
