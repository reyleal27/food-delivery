const { Schema, model } = require("mongoose");

const ingredientsItemSchema = new Schema({
    name: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: "IngredientCategory"
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
    },
    inStock: [{
        type: Boolean,
        default: true,
    }]
});

const IngredientsItem = model("IngredientsItem", ingredientsItemSchema);

module.exports = IngredientsItem;