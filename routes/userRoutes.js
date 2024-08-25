const express=require('express')
const {registerUser,loginUser}=require('../controllers/userController')
const router=express.Router()
const verifyToken=require('../middleware/authMiddleware')


router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/home',verifyToken,(req,res)=>{
    res.send({message:"homepage"})
})
module.exports=router;