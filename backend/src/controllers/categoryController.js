
const categoryService = require("../services/categoryService");

module.exports = {
    async createCategory(req, res) {
        try {
            const category = req.body;
            const user = req.user;
            const createdCategory = await categoryService.createCategory(
                category.name,
                user._id
            );
            res.status(200).json(createdCategory);
        }catch (error) {
            if (error instanceof Error) {
                res.status(400).json({error: error.message})
            } else {
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    },


    async getRestaurantCategory(req, res) {
        try {
            const { id } = req.params;
            const category = await categoryService.findCategoryByRestaurantId(id);
            res.status(200).json(category);
        }catch (error) {
            if (error instanceof Error) {
                res.status(400).json({error: error.message})
            } else {
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }
}