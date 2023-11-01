const express = require("express")
const router = express.Router()
const { Role } = require("../models")

router.get("/", async (req, res) => {
    const listOfRoles = await Role.findAll()
    res.json(listOfRoles)
})

router.get("/:id", async (req, res) => {
    const role = await Role.findByPk(req.params.id)
    res.json(role)
})

router.post("/", async (req, res) => {
    const role = req.body;
    await Role.create(role);
    res.json(role);
})


module.exports = router
