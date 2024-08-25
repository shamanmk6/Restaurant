const express = require("express");
const db=require ('./connection')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

//DB Connection
db.CONNECTDB()

app.listen(PORT, () => {
  console.log("server started");
});
