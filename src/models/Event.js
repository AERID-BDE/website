const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    eventDate: {
        type: Date,
        required: true
    },
    price: {
        type: Number
    },
    image: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('Event', EventSchema, 'events');