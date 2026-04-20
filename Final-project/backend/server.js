const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectdb = require("./config/db");
const courserouter = require("./routes/courseRoutes");
const userRouter = require("./routes/userRoutes");
const cartroutes = require("./routes/cartRoutes");
const orderroutes = require("./routes/orderRoutes");
const liveroutes = require("./routes/liveclassRoutes");
const path = require("path");

dotenv.config();

const app = express();

//static images 

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors());
app.use(express.json());

connectdb();

app.use('/api/courses', courserouter);
app.use('/api/auth',userRouter);
app.use('/api/cart',cartroutes);
app.use('/api/orders',orderroutes);
app.use('/api/live',liveroutes);

app.get('/', (req, res) => {
  res.send("api is running");
});

const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});