const express = require("express")
const router = express.Router()
const { Record } = require("../models")

router.get("/", async (req, res) => {
    const listOfRecords = await Record.findAll()
    res.json(listOfRecords)
})

router.get("/:id", async (req, res) => {
    const record = await Record.findByPk(req.params.id)
    res.json(record)
})

router.post("/", async (req, res) => {
    const record = req.body;
    await Record.create(record);
    res.json(record);
})

router.put("/:id", async (req, res) => {
    const record = await Record.findByPk(req.params.id);
    const newRecord = req.body;
    record.set({
        description: newRecord.description,
    })
    await record.save();
    res.json(record);
})

router.delete("/:id", async (req, res) => {
    const record = await Record.findByPk(req.params.id)
    await record.destroy()
    res.json(record)
})

module.exports = router