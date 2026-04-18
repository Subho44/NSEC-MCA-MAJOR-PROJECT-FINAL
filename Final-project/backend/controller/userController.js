const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");

// REGISTER
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const exist = await User.findOne({ email });
  if (exist) return res.json({ msg: "User exists" });

  const hash = await bcrypt.hash(password, 10);
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await User.create({
    name,
    email,
    password: hash,
    otp,
    otpExpire: Date.now() + 300000,
  });

  await sendEmail(email, otp);

  res.json({ msg: "OTP sent" });
};

// VERIFY
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.json({ msg: "User not found" });

  if (user.otp !== otp) return res.json({ msg: "Wrong OTP" });

  if (user.otpExpire < Date.now())
    return res.json({ msg: "OTP expired" });

  user.isVerified = true;
  user.otp = null;

  await user.save();

  res.json({ msg: "Verified" });
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !user.isVerified)
    return res.json({ msg: "Verify first" });

  const match = await bcrypt.compare(password, user.password);

  if (!match) return res.json({ msg: "Wrong password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ token });
};