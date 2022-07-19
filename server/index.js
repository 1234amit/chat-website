const express = require("express");
const cors = require("cors");
const userRoutes = require('./routes/auth')
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();
app.use(cors());
app.use(express.json());

app.use('/api/auth', userRoutes)

// connet mongodb in express js

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

// end mongodb connect


const server = app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`)
  })