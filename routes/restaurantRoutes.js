const express=require('express')
const {getRestaurantWithinRadius,getRestaurantWithinRange}=require('../controllers/restaurantController')
const verifyToken=require('../middleware/authMiddleware')

const router=express.Router()

router.post('/within-radius',verifyToken,getRestaurantWithinRadius)
router.post('/within-range',verifyToken,getRestaurantWithinRange)

module.exports=router