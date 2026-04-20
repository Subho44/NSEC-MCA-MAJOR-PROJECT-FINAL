const Cart = require("../models/Cart");

exports.addToCart = async(req,res)=>{
    const {userId,course} = req.body;
    let cart = await Cart.findOne({userId});

    if(!cart){
        cart = await Cart.create({userId,courses:[course]});
    } else {
        cart.courses.push(course);
        await cart.save();
    }
    res.json(cart);
};

exports.getCart = async(req,res)=>{
    const cart = await Cart.findOne({userId:req.params.id});
    res.json(cart);
}