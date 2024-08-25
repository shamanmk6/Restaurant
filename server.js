const express = require("express");
const connect = require("./connection");
const userRoutes = require("./routes/userRoutes");
const restaurantRoutes = require('./routes/restaurantRoutes'); 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

//DB Connection
connect.CONNECTDB();

app.use("/api/users", userRoutes);
app.use("/api/restaurants", restaurantRoutes);

//PORT Creation
app.listen(PORT, () => {
  console.log("server started");
});
