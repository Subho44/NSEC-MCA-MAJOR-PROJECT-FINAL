const Cart = require("../models/Cart");
const Order = require("../models/Order");


exports.placeOrder = async(req,res)=>{
    const {userId} = req.body;
    let cart = await Cart.findOne({userId});
    const total = cart.courses.reduce((sum,c)=> sum + c.price, 0);

   const order = await Order.create({
    userId,
    courses:cart.courses,
    total
   });
   await Cart.findOneAndDelete({userId});
    res.json({msg:"order placed",order});
};

