const { register } = require("../controllers/authController");
const Restaurant = require("../models/restaurant.model");

module.exports = {
    async createRestaurant(req, user) {
        try {
            const address = new address({
                city: req.address.city,
                country: req.address.country,
                fullName: req.address.fullName,
                postalCode: req.address.postalCode,
                state: req.address.state,
                streetAddress: req.address.streetAddress,
            })
            const savedAddress = await address.save();
            const restaurant = new restaurant({
                address: savedAddress,
                contactInformation: req.contactInformation,
                cuisineType: req.cuisineType,
                description: req.description,
                images: req.images,
                name: req.name,
                openingHours: req.openingHours,
                registrationDate: req.registrationDate,
                owner: user,
            });

            const savedRestaurant = await restaurant.save();
            return savedRestaurant;

        } catch (error) {
            throw new Error(error.message);
        };
    },

    async findRestaurantById(restaurantId) {
        try {
            const restaurant = await Restaurant.findById(restaurantId);
            if (!restaurant) {
                throw new Error("Restaurant not found");
            }
            return restaurant;
        } catch (error) {
            throw new Error(error.message);
        }
    },


    async deleteRestaurant(restaurantId) {
        try {
            const restaurant = this.findRestaurantById(restaurantId);
            if (!restaurant) {
                throw new Error("cannot find restaurant")
            }
            const deletedRestaurant = await Restaurant.deleteById(restaurantId);
            return deletedRestaurant;
        } catch (error) {
            throw new Error(error.message)
         }
    },

    async getAllRestaurant() {
        try {
            const restaurants = await Restaurant.find();
            return restaurants;
        } catch (errror) {
            throw new Error(error.message)
        }
    },


    async getRestaurantByUserId(userId) {
        try {
            const restaurant = await Restaurant.findOne({ owner: userId })
                .populate("owner")
                .populate("address");
             
            if (!restaurant) {
                throw new Error("restaurant not found")
            }
            return restaurant;
        } catch (error) {
            throw new Error(error.message);
        }
    },


    async searchRestaurant(keyword) {
        try {
            const restaurants = await Restaurant.find({
                $or: [
                    {
                        name: { $regex: keyword, $options: "i" },
                        description: { $regex: keyword, $options: "i" },
                        cuisineType: { $regex: keyword, $options: "i" }
                    },
                ]
            });
            return restaurants;
        } catch (error) {
            throw new Error(error.message)
        }
    },


    async addToFavorite(restaurantId, user) {
        try {
            const restaurant = this.findRestaurantById(restaurantId);
            const dto = {
                _id: restaurant._id,
                title: restaurant.name,
                images: restaurant.images,
                description: restaurant.description,
            }
            const favorites = user.favorites || [];
            const index = favorites.findIndex(favorites => favorites._id === restaurantId);

            if (index !== -1) {
                favorites.splice(index,1)
            } else {
                favorites.push(dto)
            }

            user.favorites = favorites;
            await user.save();
            return dto;
        } catch (error) {
            throw new Error(error.message);
        }
    },


    async updateRestaurantStatus(id) {
        try {
            const restaurant = await Restaurant.findById(id)
                .populate("owner")
                .populate("address");

            if (!restaurant) {
                throw new Error("Restaurant not found");
            }

            restaurant.open = !restaurant.open;
            await restaurant.save();
            return restaurant;
        } catch (error) {
            throw new Error(error)
        }
    }

}