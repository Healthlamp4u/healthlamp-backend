require("dotenv").config({path: "./config/.env"})

const express = require('express')
const morgan = require("morgan")
const cors = require("cors")

const app = express()

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
if (process.env.ENV === "development") {
    app.use(morgan("dev"))
}

// DB Setup
require('./config/db')();

// Routes
app.use("/api", require('./routes/index'))

app.listen(process.env.port, () => console.log(`Server running on port ${process.env.port}`))