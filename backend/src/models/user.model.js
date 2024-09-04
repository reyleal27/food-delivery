const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  role: {
    type: String,
    enum: ["ROLE_CUSTOMER", "ROLE_RESTAURANT_OWNER"],
    default: "ROLE_CUSTOMER",
  },
  orders: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
  favorites: [
    {
      name: String,
      description: String,
      images: [],
    },
  ],
  addresses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
});

const User = model("User", userSchema);

module.exports = { User };
