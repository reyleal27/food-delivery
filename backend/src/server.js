const app = require('./index');
const mongoose = require('mongoose');

require("dotenv").config();

const { PORT = 5000, MONGO_URL } = process.env;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
});


mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
