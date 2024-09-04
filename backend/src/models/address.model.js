const { Schema, Model } = require("mongoose");

const addressSchema = new Schema({
    fullName: String,
    streetAddress: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
});

const Address = model("Address", addressSchema);

module.exports = Address;