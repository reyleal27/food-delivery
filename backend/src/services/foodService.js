const Food = require("../models/food.model");


module.exports = {
    createFood: async (req, restaurant)=>{
        try {
            const food = new Food({
                foodCategory: req.foodCategory,
                creationDate: new Date(),
                description: req.description,
                images: req.images,
                name: req.name,
                price: req.price,
                isSeasonal: req.seasonal,
                isVegetarian: req.isVegetarian,
                restaurant: restaurant._id,
                ingredients: req.ingredients,
            });
            await food.save();
            restaurant.foods.push(food._id);
            await restaurant.save();
            return food;
        } catch (error) {
            throw new Error(`Failed to create food: ${error.message}`)
        }
    },

    deleteFood: async (foodId) => {
        try {
            const food = await Food.findById(foodId);
            if (!food) {
                throw new Error(`Food not found with ID ${foodId}`);
            };
            await Food.findByIdAndDelete(foodId);
        } catch (error) {
            throw new Error(`Failed to delete food with ID ${foodId}: ${error.message}`)
        }   
    },

    getRestaurantsFood: async (restaurantId,isVegetarian,nonveg,seasonal,foodCategory) => {
        try {
            let query = { restaurant: restaurantId };
            if (isVegetarian === true) {
                query.isVegetarian = true;
            }
            if (nonveg === true) query.isVegetarian = false;
            if (seasonal === true) query.isSeasonal = true;
            if (foodCategory) query.foodCategory = foodCategory;

            const foods = await Food.find(query).populate([
                { path: "ingredients", populate: { path: "category", select: "name" } },
                "FoodCategory",
                { path: "restaurant", select: "name _id"},
            ]);
        } catch (error) {
            throw new Error(`Failed to retrieve restaurant's food: ${error.message}`);
        };
    },

    searchFood: async (keyword) => {
        try {
            let query = {};
            if (keyword) {
                query.$or = [
                    { name: { $regex: keyword, $options: "i" } },
                    { "foodCategory.name": { $regex: keyword, $options: "i" } },
                ];
            }
            const foods = await Food.find(query);
            return foods;
        } catch (error) {
            throw new Error(`Failed to search for food: ${error.message}`);
        }
    },


    updateAvailabilityStatus: async (foodId) =>{
        try {
            const food = await Food.findById(foodId).populate([
                { path: "ingredients", populate: { path: "category", select: "name" } },
                "foodCategory",
                { path: "restaurant", select: "name _id" }
            ]);
            if (!food) {
                throw new Error(`Food not found with ID ${foodId}`);
            }
            food.available = !food.available;

        } catch (error) {
            throw new Error(`Failed to update availability status for food with Id ${foodId}: ${error.message}`);
        };
    },


    findFoodById: async (foodId) => {
        try {
            const food = await Food.findById(foodId);
            if (!food) {
                throw new Error(`Food not found with ID ${foodId}`);
            }
            return food;
        } catch (error) {
            throw new Error(`Failed to find food with ID ${foodId}: ${error.message}`);    
        };
    },


    


}