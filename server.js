const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bluozvb.mongodb.net/${process.env.DB_NAME}`)

app.use("/", require("./routes/noteRoute"))

app.listen(PORT, function () {
    console.log("express server is running on port 3001");
})