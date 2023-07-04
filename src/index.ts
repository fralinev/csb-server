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

// app.use(credentials);

app.use((req: any, res: any, next: any) => {
  res.setHeader("Access-Control-Allow-Origins", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/signup", require("./routes/signup"));

app.listen(5050, () => {
  console.log("app is listening on port 5050");
});
