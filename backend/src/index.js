const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRoute');
const homeRouter = require('./routes/homeRoutes');
const userRouter = require('./routes/userRoutes');
const restaurantRouter = require('./routes/restaurantRoutes');
const orderRouter = require('./routes/orderRoutes');
const menuItemRouter = require('./routes/menuItemRoutes');
const adminRestaurantRouter = require("./routes/adminRestaurantRoutes");
const adminOrderRouter = require("./routes/adminOrderRoutes");
const cartRouter = require("./routes/cartRoutes");
const cartItemRoutes = require('./routes/cartItemRoutes');
const categoryRouter = require('./routes/categoryRoutes');


const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', homeRouter);

app.use("/auth", authRouter);

app.use("/api/users", userRouter);

app.use("/api/restaurants", restaurantRouter);

app.use("/api/order", orderRouter);

app.use("/api/food", menuItemRouter);

app.use("/api/admin/restaurants", adminRestaurantRouter);

app.use("/api/admin/order", adminOrderRouter);

app.use("/api/cart", cartRouter);

app.use('/api/cart-item', cartItemRoutes);

app.use("/api/category", categoryRouter);

module.exports = app;
