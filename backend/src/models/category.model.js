const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
    name: String,
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
    },
});

const Category = model("Category", categorySchema);

module.exports = Category;