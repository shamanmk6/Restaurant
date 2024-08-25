const mongoose = require("mongoose");
const RestaurantSchema = new mongoose.Schema({
  description: { type: String, required: true },
  address: {
    building: String,
    coord: {
      type: [Number],
      required: true,
    },
    street: String,
    zipcode: String,
  },
  borough:String,
  cuisine: String,
  grades: [
    {
      date: Date,
      grade: String,
      score: Number,
    },
  ],
  name: { type: String, required: true },
  restaurant_id:String
});
RestaurantSchema.index({ "address.coord": "2dsphere" });
module.exports = mongoose.model("Restaurant", RestaurantSchema, "restaurants");
