const { Schema, model } = require("mongoose");

const orderItemSchema = new Schema({
    food: {
        type: Schema.Types.ObjectId,
        ref: "Food",
    },
    quantity: Number,
    totalPrice: Number,
    ingredients: [String],
});

const OrderItem = model("OrderItem", orderItemSchema);

module.exports = OrderItem;