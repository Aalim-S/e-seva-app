const applicationRoutes = require("./routes/applicationRoutes")

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/uploads",
  express.static("uploads"))
app.use("/api", applicationRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {

  console.log("MongoDB Connected 🚀")

})
.catch((error) => {

  console.log(error)

})

app.get("/", (req, res) => {

  res.send("Backend Running 🚀")

})

app.listen(5000, () => {

  console.log("Server running on port 5000")

})

