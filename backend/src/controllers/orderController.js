const orderService = require("../services/orderService");
const userService = require("../services/userServices");


module.exports = {

    // customer order controller

    createOrder: async (req, res) => {
        try {
            const order = req.body;
            const user = req.user;

            const paymentResponse = await orderService.createOrder(order, user);
            res.status(200).json(paymentResponse);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Internal Server Error" });
            }
        }
    },


    getAllUserOrders: async (req, res) => {
        try {
            user = req.user;
            const userOrder = await orderService.getUserOrder(user._id);
            res.status(200).json(userOrder);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({error: error.message})
            } else {
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    },



    // admin order controller

    deleteOrder: async (req, res) => {
        try {
            const { orderId } = req.params;
            await orderService.cancelOrder(orderId);
            res.status(200).json({message: `Order deleted with ID ${orderId}`})
        }catch (error) {
            if (error instanceof Error) {
                res.status(400).json({error: error.message})
            } else {
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }
    
}
