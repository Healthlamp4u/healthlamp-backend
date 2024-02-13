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

const PORT = process.env.port || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))