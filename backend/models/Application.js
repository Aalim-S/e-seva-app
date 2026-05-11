const mongoose = require("mongoose")

const applicationSchema = new mongoose.Schema({

  name: String,

  phone: String,

  service: String,

  document: String,

  status: {
    type: String,
    default: "Pending"
  }

})

module.exports = mongoose.model(
  "Application",
  applicationSchema
)