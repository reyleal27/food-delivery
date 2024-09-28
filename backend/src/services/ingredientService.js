const IngredientCategory = require("../models/ingredientCategory.model");

const IngredientsItem = require("../models/ingredientItem.model");
const Restaurant = require("../models/restaurant.model");

module.exports = {
    async createIngredientsCategory(name, restaurantId) {
        try {
            let category = await IngredientCategory.findOne({
                restaurant: restaurantId,
                name: name,
            });
            if (category) {
                return category;
            }

            const restaurant = await Restaurant.findById(restaurantId);
            if (!restaurant) {
                throw new Error(`Restaurant not found with ID ${restaurantId}`);
            }

            category = new IngredientCategory({
                name: name,
                restaurant: restaurantId,
            });
            const createdCategory = await category.save();
            return createdCategory;
        } catch (error) {
            throw new Error(`Failed to create ingredients category: ${error.message}`)
        }
    },


    async findIngredientsCategoryById(id) {
        try {
            const category = await IngredientCategory.findById(id);
            if (!category) {
                throw new Error(`Ingredients category not found with ID ${id}`);
            }
            return category;
        } catch (error) {
            throw new Error(`Failed to find ingredients category with ID ${id}: ${error.message}`)
        }
    },


    async findIngredientsByRestaurantId(restaurantId) {
        try {
            const categories = await IngredientCategory.findIngredientsByRestaurantId({ restaurant: restaurantId });
            return categories;
        } catch (error) {
            throw new Error(`Failed to find ingredients categories for restaurant with ID ${restaurantId}: ${error.message}`)
         }
    },
    

    async findRestaurantIngredients(restaurantId) {
        try {
            const items = await IngredientsItem.find({ restaurant: restaurantId }).populate("category");
            return items;
        } catch (error) {
            throw new Error(`Failed to find ingredients for restaurant with ID ${restaurantId}: ${error.message}`);
        }
    },


    async createIngredientItem(restaurantId, ingredientName, ingredientCategoryId) {
        try {
            const category = await this.findIngredientsCategoryById(
                ingredientCategoryId
            );

            if (!category) {
                throw new Error(`Ingredient category not found with id ${ingredientCategoryId}`)
            }

            let item = await IngredientsItem.findOne({
                restaurant: restaurantId,
                name: ingredientName,
                category: category_.id,
            });

            if (item) {
                return item;
            }

            const restaurant = await Restaurant.findById(restaurantId);
            if (!restaurant) {
                throw new Error(`Restaurant not found with ID ${restaurantId}`);
            }

            item = new IngredientsItem({
                name: ingredientName,
                restaurant: restaurantId,
                category: category._id,
            });

            const savedItem = await item.save();
            category.ingredients.push(savedItem._id);
            await category.save();
            return savedItem;
        } catch (error) {
            throw new Error(`Failed to create ingredients item: ${error.message}`)
        }
    },

    async updateStock(id) {
        try {
            const item = await IngredientsItem.findById(id).populate("category");
            if (!item) {
                throw new Error(`Ingredient not found with ID ${id}`);
            }

            item.inStock = !item.inStock;
            await item.save();
            return item;
        } catch (error) {
            throw new Error(`Failed to update ingredient stock status with ID ${id}: ${error.message}`)
        }
    },

}
