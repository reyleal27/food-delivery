const { search } = require('..');
const foodService = require('../services/foodService');
const restaurantService = require('../services/restaurantService');
const userService = require('../services/userServices');

module.exports = {

    searchFood: async (req, res) => {
        try {
            const { name } = req.query;
            const menuItem = await foodService.searchFood(name);
            res.status(200).json(menuItem);
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        };
    },
    
    getMenuItemByRestaurantId: async (req, res) => {
        try {
            const { restaurantId } = req.params;
            const { isVegetarian, seasonal, nonveg, food_category } = req.query;
            const menuItem = await foodService.getRestaurantsFood(
                restaurantId,
                isVegetarian,
                nonveg,
                seasonal,
                food_category,
            )
        }
    }
}