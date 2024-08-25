const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGODB_URI;

//DB CONNECTION QUERY

module.exports = {
  CONNECTDB: async () => {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName:"sample_restaurants"
      });
      console.log("Connected to DB");
    } catch (error) {
      console.log("Error in connecting to DB", err);
    }
  }
};
