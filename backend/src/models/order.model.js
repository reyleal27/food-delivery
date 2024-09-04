const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
    },
    totalAmount: Number,
    orderStatus: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    deliveryAddress: {
        type: Schema.Types.ObjectId,
        ref: "Address",
    },
    items: [{
        type: Schema.Types.ObjectId,
        ref: "OrderItem",
    }],
    payment: {
        type: Schema.Types.ObjectId,
        ref: "Payment"
    },
    totalItem: Number,
    totalPrice: Number,
});

const Order = model("Order", orderSchema);

module.exports = Order;