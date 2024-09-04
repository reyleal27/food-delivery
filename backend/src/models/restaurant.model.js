const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    name: String,
    description: String,
    cuisineType: String,
    address: {
        type: Schema.Types.ObjectId,
        ref: "Address",
    },
    contactInformation: {},
    openingHours: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order",
    }],
    numRating: Number,
    images: [String],
    registrationDate: {
        type: Date,
        default: Date.now,
    },
    open: Boolean,
    foods: [{
        type: Schema.Types.ObjectId,
        ref: "Food"
    }],
});

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;