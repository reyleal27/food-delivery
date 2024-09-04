const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    foodCategory: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    images: [String],
    available: Boolean,
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
    },
    isVegetarian: Boolean,
    isSeasonal: Boolean,
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: "IngredientsItem",
    }],
    creationDate: {
        type: Date,
        default: Date.now
    },
});

const Food = model("Food", foodSchema);

module.exports = Food;