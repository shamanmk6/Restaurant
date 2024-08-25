const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGODB_URI;
const dbName="sample_restaurants"

module.exports = {
  CONNECTDB: async () => {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to DB");
    } catch (error) {
      console.log("Error in connecting to DB", err);
    }
  },
  getDb: () => {
    mongoose.connection.useDb(dbName);
  },
};
