const mongoose = require('mongoose');

const orderschema = new mongoose.Schema(
  {
   userId:String,
   courses:Array,
   total:Number,
   payment:{type:String, default:"COD"}
    
  },{timestamps:true});

module.exports = mongoose.model('Order', orderschema);