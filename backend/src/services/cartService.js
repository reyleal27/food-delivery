const Cart = require("../models/cart.model");
const CartItem = require("../models/cartItem.model");
const Food = require("../models/food.model");

module.exports = {
    async createCart(user) {
        const cart = new Cart({ customer: user });
        const createdCart = await cart.save();
        return createdCart;
    },

    async findCartByUserId(userId) {
        let cart;
        cart = await Cart.findOne({ customer: userId }).populate([
            {
                path: "items",
                populate: {
                    path: "food",
                    populate: { path: "restaurant", select: "_id" },
                },
            },
            
        ]);

        if (!cart) {
            throw new Error("Cart not found u - ", userId);
        }

        let cartItems = await CartItem.find({ cart: cart._id }).populate("food");

        console.log("cartItems", cartItems);

        let totalPrice = 0;
        let totalDiscount = 0;
        let totalItem = 0; 

        for (const item of cart.items) {
            totalPrice += item.price;
            totalDiscountedPrice += item.discountedPrice;
            totalItem += item.quantity;
            
        }

        cart.totalPrice = totalPrice;
        cart.totalItem = totalItem;
        cart.totalDiscountedPrice = totalDiscountedPrice;
        cart.discounted = totalPrice - totalDiscountedPrice;

        return cart;

    
    },

    async addItemToCart(req, userId) {
        const cart = await Cart.findOne({ customer: userId });
        const food = await Food.findById(req.menuItemId);

        const  isPresent = await CartItem
    }
     
}