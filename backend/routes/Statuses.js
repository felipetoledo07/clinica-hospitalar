const express = require("express")
const router = express.Router()
const { Status } = require("../models")

router.get("/", async (req, res) => {
    const listOfStatuses = await Status.findAll()
    res.json(listOfStatuses)
})

router.get("/:id", async (req, res) => {
    const status = await Status.findByPk(req.params.id)
    res.json(status)
})

router.post("/", async (req, res) => {
    const status = req.body;
    await Status.create(status);
    res.json(status);
})


module.exports = router
