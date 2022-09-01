const express = require("express");
const app = express()
const cors = require("cors");
const imagesRoutes =  require("./routes/imagesRoutes")
const profilesRoutes = require("./routes/profilesRoutes")
require('dotenv').config()
const {PORT} = process.env

app.use(cors());

// use this if we need access to req.body
// app.use(express.json());

app.use('/static',express.static('public'))

app.use("/images", imagesRoutes);

app.use("/profiles", profilesRoutes)

app.listen(PORT, () => {
    console.log(`Server is ready on port ${PORT}`)
})