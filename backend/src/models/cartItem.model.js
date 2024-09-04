const { Schema, model } = require("mongoose");

const cartItemSchema = new Schema({
    cart: {
        type: Schema.Types.ObjectId,
        ref: "Cart"
    },
    food: {
        type: Schema.Types.ObjectId,
        ref: "Food"
    },
    quantity: Number,
    ingredients: [String],
    totalPrice: Number,
});

const CartItem = model("CartItem", cartItemSchema);

module.exports = CartItem;