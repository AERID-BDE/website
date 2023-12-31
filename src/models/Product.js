const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    archived: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema, 'products');