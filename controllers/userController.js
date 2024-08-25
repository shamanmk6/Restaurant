const db = require("../connection");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config();

const secret=process.env.JWT_SECERET
console.log("secret",secret);

//Registering User
const registerUser = async (req, res) => {
  try {
    console.log("inside registeruser");
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    res.send({ message: "inserteduser" });
  } catch (error) {
    res.send({ error: "not inserted" });
  }
};

const loginUser = async (req,res) => {
    const {email,password}=req.body
    try {
        const user=await User.findOne({email})
        console.log(user);
        const comparePass=await bcrypt.compare(password,user.password)
        const payLoad={userId:user._id}
        const token=jwt.sign(payLoad,secret,{expiresIn:3600})
        res.json({token})
    } catch (error) {
        res.status(500).send({err:error.message})
    }
};

module.exports = {
  registerUser,
  loginUser,
};
