const Live = require("../models/Liveclass");

//create
exports.createclass = async (req, res) => {
  try {
    const { title} = req.body;
    const meetingLink = `https://meet.jit.si/${title}_${Date.now()}`;

    const data = await Live.create({
     ...req.body,
     meetingLink
    });

    res.status(201).json(data);
  } catch (err) {
    res.status(400).json(err );
  }
};

//get all class
exports.getClasses = async (req,res)=>{
    const data = await Live.find();
    res.json(data);
}
