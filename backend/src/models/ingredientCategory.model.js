const { Schema, model } = require("mongoose");

const ingredientCategorySchema = new Schema({
    name: String,
    description: String,
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
    },
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: "IngredientsItem"
    }]
});

const IngredientCategory = model("IngredientCategory", ingredientCategorySchema);

module.exports = IngredientCategory;