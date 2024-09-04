const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRoute');
const homeRouter = require('./routes/homeRoutes');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', homeRouter);

app.use("/auth", authRouter);



module.exports = app;
