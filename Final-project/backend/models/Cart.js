const mongoose = require('mongoose');

const cartschema = new mongoose.Schema(
  {
   userId:String,
   courses:Array
    
  });

module.exports = mongoose.model('Cart', cartschema);