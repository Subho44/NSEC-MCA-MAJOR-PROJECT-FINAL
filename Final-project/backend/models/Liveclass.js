const mongoose = require('mongoose');

const liveschema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    instructor: { type: String, required: true },
    date:String,
    time:String,
    meetingLink:String
   
  },
  { timestamps: true });

module.exports = mongoose.model('Live',liveschema);