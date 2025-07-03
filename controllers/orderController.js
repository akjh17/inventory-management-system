const Order = require('../models/Order');
const Item = require('../models/Item');

exports.createOrder = async (req, res) => {
    try {
        const { items } = req.body;

        let totalAmount = 0;
        for (const i of items) {
            const item = await Item.findById(i.item);
            totalAmount += item.price * i.quantity;
        }

        const order = await Order.create({
            items,
            totalAmount
        });

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('items.item');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const order = await Order.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
