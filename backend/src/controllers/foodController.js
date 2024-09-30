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
            const menuItems = await foodService.getRestaurantsFood(
                restaurantId,
                isVegetarian,
                nonveg,
                seasonal,
                food_category,
            )
            return res.status(200).json(menuItems);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({error: "Internal server error"})
            }
        }
    },

    createItem: async (req, res) => {
        try {
            const item = req.body;
            const user = req.user;
            const restaurant = await restaurantService.findRestaurantById(item.restaurantId);

            const menuItem = await foodService.createFood(item, restaurant);
            res.status(200).json(menuItem);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Internal server error" });
            }
        }
    },
     
    deleteItem: async (req, res) => {
        try {
            const { id } = req.params;
            
            const user = req.user;
            await foodService.deleteFood(id);
             res.status(200).json({ message: "Menu item is deleted" });
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({error: "Internal server error"})
            }
        }
    },

    updateAvailabilityStatus: async (req, res) => {
        try {
            const { id } = req.params;
            const menuItem = await foodService.updateAvailabilityStatus(id);
            res.status(200).json(menuItem);
        } catch (error) {
             if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({error: "Internal server error"})
            }
        }
  }



}