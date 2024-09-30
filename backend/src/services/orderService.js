const Order = require('../models/order.model');
const Address = require('../models/address.model');
const OrderItem = require("../models/orderItem.model");
const Restaurant = require("../models/restaurant.model");
const cartService = require("../services/cartService");
const paymentService = require("../services/paymentService");


module.exports = {
    async createOrder(order, user) {
        try {
            const address = order.deliveryAddress;
            let saveAddress;
            if (address._id) {
                const isAddressExist = await Address.findById(address._id);
                if (isAddressExist) {
                    saveAddress = isAddressExist;
                } else {
                    const shippingAddress = new Address(order.deliveryAddress);
                    savedAddress = await shippingAddress.save();

                }
            }

            if (!user.address.includes(savedAddress._id)) {
                user.addresses.push(savedAddress._id);
                await user.save();
            }

            const restaurant = await Restaurant.findById(order.restaurantId);
            if (!restaurant) {
                throw new Error(`Restaurant not found with ID ${order.restaurantId}`);
            }

            const cart = await cartService.findCartByUserId(user._id);

            if (!cart) {
                throw new Error("Cart not found");
            }

            const orderItems = [];

            for (const cartItem of cart.items) {
                const orderItem = new OrderItem({
                    food: cartItem.food,
                    ingredients: cartItem.ingredients,
                    quantity: cartItem.quantity,
                    totalPrice: cartItem.food.price * cartItem.quantity,
                });
                const savedOrderItem = await orderItem.save();
                orderItems.push(savedOrderItem._id);
            }

            const totalPrice = await cartService.calculateCartTotals(cart);

            const createdOrder = new Order({
                customer: user._id,
                deliveryAddress: savedAddress._id,
                createdAt: new Date(),
                orderStatus: "PENDING",
                totalAmount: totalPrice,
                restaurant: restaurant._id,
                items: orderItems,
            });

            const savedOrder = await createdOrder.save();

            restaurant.orders.push(savedOrder._id);
            await restaurant.save();

            // const paymentResponse = await paymentService.generatePaymentLink(savedOrder);
            // console.log(paymentResponse);
            // return paymentResponse;

            return savedOrder;
        } catch (error) {
            throw new Error(`Failed to create order: ${error.message}`)
        }
    },

    async cancelOrder(orderId) {
        try {
            await Order.findByIdAndDelete(orderId);
        } catch (error) {
            throw new Error(`Failed to cancel order with ID ${orderId}: ${error.message}`);
        }
    },


    async getUserOrder(userId) {
        try {
            const orders = await Order.find({ customer: userId });
            return orders;
        } catch (error) {
            throw new Error(`Failed to get user orders: ${error.message}`);
        }
    },

    async getOrdersOfRestaurant(restaurantId, orderStatus) {
        try {
            let orders = await Order.find({ restaurant: restaurantId });
            if (orderStatus) {
                orders = orders.filter((order) => order.orderStatus === orderStatus)
            }
            return orders;
        } catch (error) {
            throw new Error(`Failed to get orders of restaurant with ID ${restaurantId}: ${error.message}`);
        }
    },

    async updateOrder(orderId, orderStatus) {
        try {
            const validStatuses = [
                "OUT_FOR_DELIVERY",
                "DELIVERED",
                "COMPLETED",
                "PENDING",
            ];
            if (!validStatuses.includes(orderStatus)) {
                throw new Error("Please select a valid order status");
            }

            const order = await Order.findById(orderId);
            if (!order) {
                throw new Error(`Order not found with ID ${orderId}`);
            }

            order.orderStatus = orderStatus;
            await order.save();
        } catch (error) {
            throw new Error(`Failed to update order with ID ${orderId}:${error.message}`);
        }
    },
};