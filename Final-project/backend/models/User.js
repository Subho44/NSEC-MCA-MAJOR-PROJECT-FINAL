const mongoose = require('mongoose');

const userschema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true,unique:true },
    password: { type: String},
    otp: { type: String},
    otpExpire: Date,
    isVerified: { type:Boolean, default:false},
    
  });

module.exports = mongoose.model('User-auth', userschema);