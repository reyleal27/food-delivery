const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    items: [{
        type: Schema.Types.ObjectId,
        ref: "CartItem"
    }],
    total: Number,
});

const Cart = model("Cart", cartSchema);

module.exports = Cart;