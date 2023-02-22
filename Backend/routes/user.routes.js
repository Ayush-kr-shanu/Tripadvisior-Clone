const express=require('express')

const jwt=require('jsonwebtoken')
const bcrypt=require("bcrypt");
const { UserModel } = require('../model/user.model');

const userRoute=express.Router()

userRoute.post('/register', async (req, res) => {
    const { name, email, pass } = req.body;
    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.send({ msg: "User already registered, please login" });
        }
        bcrypt.hash(pass, 5, async (err, hash) => {
            if (err) {
                return res.send({ msg: "Something went wrong", error: err.message });
            } else {
                const user = new UserModel({ name, email, pass: hash });
                await user.save();
                return res.send({ msg: "User registered successfully" });
            }
        });
    } catch (err) {
        res.send({ msg: "Something went wrong", error: err.message });
    }
});

userRoute.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    try {
      const user = await UserModel.find({ email });
      if (user.length > 0) {
        bcrypt.compare(pass, user[0].pass, (err, result)=> {
          if(result) {
              let token = jwt.sign({userID:user[0]._id}, "masai");
              res.send({ msg: "user has been logged in", token: token });
          }else{
              res.send({ msg: "wrong credential" });
          }
        });
      } else {
        res.send({ msg: "wrong credential" });
      }
    } catch (err) {
      res.send({ msg: "Something went wrong", error: err.message });
    }
});

module.exports={
    userRoute
}