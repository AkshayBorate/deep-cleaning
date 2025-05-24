const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
// const express = require('express');
dbConnect();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//Routes
app.use("/api/auth", authRoutes);

//Start the server
const PORT = process.env.PORT || 7002;

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
