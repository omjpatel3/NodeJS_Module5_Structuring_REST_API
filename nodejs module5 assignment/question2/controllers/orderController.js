const { OrderModel } = require("../models/orderModel");

// Add Orders (GET)
const add = async (req, res) => {
    const orders = await OrderModel.find();
    res.render("orders", { data: orders, editcat: null });
};

// Save Orders (POST)
const savedata = async (req, res) => {
    const { orderPrice, productName, id } = req.body;

    if (id) {
        // Edit Order
        await OrderModel.findByIdAndUpdate(id, { orderPrice, productName });
    } else {
        // Add New Order
        const newOrder = new OrderModel({ orderPrice, productName });
        await newOrder.save();
    }
    res.redirect("/orders");
};

// Edit Order (GET)
const editData = async (req, res) => {
    const { id } = req.params;
    const order = await OrderModel.findById(id);
    res.render("orders", { data: await OrderModel.find(), editcat: order });
};

// Delete Order (GET)
const delData = async (req, res) => {
    const { id } = req.params;
    await OrderModel.findByIdAndDelete(id);
    res.redirect("/orders");
};

module.exports = { add, savedata, delData, editData };
