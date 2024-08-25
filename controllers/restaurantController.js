const Restaurant = require("../model/restaurantModel")

//Finding Restaurants Within Specific Radius
const getRestaurantWithinRadius = async (req, res) => {
  const { latitude, longitude, radius } = req.body;
  try {
    const restaurants = await Restaurant.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          distanceField: "distance",
          maxDistance: parseFloat(radius),
          spherical: true,
        },
      },
      {
        $project: {
          name: 1,
          description: "$cuisine",
          location: {
            latitude: { $arrayElemAt: ["$address.coord", 1] },
            longitude: { $arrayElemAt: ["$address.coord", 0] },
          },
          averageRating: {
            $avg: "$grades.score",
          },
          numberOfRatings: { $size: "$grades" },
          distance: 1,
        },
      },
    ]);
    if (restaurants.length === 0) {
      return res.status(500).send("No restaurant with in this radius is found");
    }

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Finding Restaurants Within Specified Radius Range
const getRestaurantWithinRange = async (req, res) => {
  const { latitude, longitude, minimumDistance, maximumDistance } = req.body;
  try {
    const restaurants = await Restaurant.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          distanceField: "distance",
          minDistance: parseFloat(minimumDistance),
          maxDistance: parseFloat(maximumDistance),
          spherical: true,
        },
      },
      {
        $project: {
          name: 1,
          description: "$cuisine",
          location: {
            latitude: { $arrayElemAt: ["$address.coord", 1] },
            longitude: { $arrayElemAt: ["$address.coord", 0] },
          },
          averageRating: {
            $avg: "$grades.score",
          },
          numberOfRatings: { $size: "$grades" },
          distance: 1,
        },
      },
    ]);

    if (restaurants.length === 0) {
      res.send("No restaurant with in this radiusrange is found");
    }
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getRestaurantWithinRadius,
  getRestaurantWithinRange,
};
