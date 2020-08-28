const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    product_name: { type: String, required: true },
    product_description: { type: String, required: true },
    product_price: { type: Number, required: true }
}, {
    timestamps: true
})

module.exports = model('Product', ProductSchema);