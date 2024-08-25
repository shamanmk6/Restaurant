const express = require("express");
const connect = require("./connection");
const userRoute = require("./routes/userRoutes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

//DB Connection
connect.CONNECTDB();

app.use("/api/users", userRoute);

//PORT Creation
app.listen(PORT, () => {
  console.log("server started");
});
