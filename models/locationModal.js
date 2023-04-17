const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter the name']
    },
    url_name: {
        type: String,
        required: [true, 'please enter the url name']
    },
    email: {
        type: String,
        required: [true, 'please enter the Email Address']
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    postal_code: {
        type: String
    },
    phone_number:{
        type: Number,
        required: [true, 'enter the phone number']     
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('location', locationSchema);