const upload = require("../multer")

const express = require("express")

const router = express.Router()

const Application = require("../models/Application")

router.post(
  "/apply",
  upload.single("document"),

  async (req, res) => {

  try {

    const newApplication =
    new Application({

      name: req.body.name,

      phone: req.body.phone,

      service: req.body.service,

      document: req.file.filename

    })

    await newApplication.save()

    res.status(201).json({
      message: "Application Submitted"
    })

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

})

module.exports = router

router.get("/applications", async (req, res) => {

  try {

    const applications = await Application.find()

    res.status(200).json(applications)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

})

router.put("/applications/:id", async (req, res) => {

  try {

    const updatedApplication =
      await Application.findByIdAndUpdate(

        req.params.id,

        {
          status: req.body.status
        },

        {
          new: true
        }

      )

    res.status(200).json(updatedApplication)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

})