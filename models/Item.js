const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    quantity: { type: Number, default: 0 },
    price: { type: Number, required: true },
    lowStockThreshold: { type: Number, default: 5 }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
