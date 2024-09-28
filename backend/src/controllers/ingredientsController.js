const ingredientService = require("../services/ingredientService");

module.exports = {
    createIngredientCategory: async (req, res) => {
        try {
            const { name, restaurantId } = req.body;
            const items = await ingredientService.createIngredientsCategory(
                name,
                restaurantId,
            );
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({error: "Internal server error",message: error.message})
        }
    },

    createIngredient: async (req, res) => {
        try {
            const { restaurantId, name, ingredientCategoryId } = req.body;
            const item = await ingredientService.createIngredientItem(
                restaurantId,
                name,
                ingredientCategoryId,
            );
            return res.status(200).json(item);
        } catch (error) {
            res.status(500).json({ error: true, message: error.message });
         }
    },
    
    updateStock: async (req, res) => {
        try {
            const { id } = req.params;
            const item = await ingredientService.updateStock(id);
            res.status(200).json(item);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },

    restaurantsIngredient: async (req, res) => {
        try {
            const { id } = req.params;
            const items = await ingredientService.findRestaurantIngredients(id);
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },


    restaurantsIngredientCategory: async (req, res) => {
        try {
            const { id } = req.params;
            const items = await ingredientService.findIngredientsByRestaurantId(id);
            res.status(200).json(items);
        }catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

}