const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    items: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item'
            },
            quantity: Number
        }
    ],
    status: {
        type: String,
        enum: ['Draft', 'Confirmed', 'Packed', 'Shipped', 'Delivered'],
        default: 'Draft'
    },
    totalAmount: Number
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
