const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'please enter the title']
    },
    notification_text:{
        type: String,
        required: [true, 'please add notification_text']
    },
    location_id: {
        type: String,
        required: [true, 'please enter the location_id']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('notification', notificationSchema);