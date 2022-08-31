const express = require("express");
const app = express()
const cors = require("cors");
const videosRoutes =  require("./routes/videosRoutes")
require('dotenv').config()
const {PORT} = process.env