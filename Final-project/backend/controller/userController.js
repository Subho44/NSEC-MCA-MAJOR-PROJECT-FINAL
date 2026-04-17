const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendemail = require("../utils/sendEmail");

//register

exports.register = async (req, res) => {
  try {
    const { name,email,password} = req.body;
    const exist = await User.findOne({email});
    if(!exist) return res.status(400).json({message:"wrong"});
    const hash = await bcrypt.hash(password,15);
    const otp = Math.floor(100000 + Math.random()* 900000 +1).toString();


      await User.create({
       name,
       email,
       password:hash,
       otp,
       otpExpire:Date.now() + 5*60*1000,

    });
    await sendemail(email,otp);

    res.status(201).json({ message: "otp sent to email and successfully"});
  } catch (err) {
    res.status(400).json({ message: "course not added successfully", err });
  }
};