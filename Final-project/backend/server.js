const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectdb = require("./config/db");
const courserouter = require("./routes/courseRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectdb();

app.use('/api/courses', courserouter);

app.get('/', (req, res) => {
  res.send("api is running");
});

const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});