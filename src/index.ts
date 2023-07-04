const express = require("express");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");
const cors = require("cors");
const app = express();
require("dotenv").config();
const connectDB = require("./config/dbConnection");

const User = require("./models/User");

connectDB();

console.log("credentials: ", credentials);

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/signup", require("./routes/signup"));

app.listen(5050, () => {
  console.log("app is listening on port 5050");
});
