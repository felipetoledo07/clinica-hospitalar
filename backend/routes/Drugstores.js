const express = require("express")
const router = express.Router()
const { Drugstore } = require("../models")

router.get("/", async (req, res) => {
    const listOfDrugstores = await Drugstore.findAll()
    res.json(listOfDrugstores)
})

router.get("/:id", async (req, res) => {
    const drugstore = await Drugstore.findByPk(req.params.id)
    res.json(drugstore)
})

router.post("/", async (req, res) => {
    const drugstore = req.body;
    await Drugstore.create(drugstore);
    res.json(drugstore);
})

router.put("/:id", async (req, res) => {
    const drugstore = await Drugstore.findByPk(req.params.id);
    const newDrugstore = req.body;
    drugstore.set({
        cnpj: newDrugstore.cnpj,
        password:  newDrugstore.password,
    })
    await drugstore.save();
    res.json(drugstore);
})

router.delete("/:id", async (req, res) => {
    const drugstore = await Drugstore.findByPk(req.params.id)
    await drugstore.destroy()
    res.json(drugstore)
})

module.exports = router