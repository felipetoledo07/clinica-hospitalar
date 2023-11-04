const express = require("express")
const router = express.Router()
const { Certificate } = require("../models")

router.get("/", async (req, res) => {
    const listOfCertificates = await Certificate.findAll()
    res.json(listOfCertificates)
})

router.get("/:id", async (req, res) => {
    const certificate = await Certificate.findByPk(req.params.id)
    res.json(certificate)
})

router.post("/", async (req, res) => {
    const certificate = req.body;
    await Certificate.create(certificate);
    res.json(certificate);
})

router.put("/:id", async (req, res) => {
    const certificate = await Certificate.findByPk(req.params.id);
    const newCertificate = req.body;
    certificate.set({
        description: newCertificate.description,
        suspention:  newCertificate.suspention,
    })
    await certificate.save();
    res.json(certificate);
})

router.delete("/:id", async (req, res) => {
    const certificate = await Certificate.findByPk(req.params.id)
    await certificate.destroy()
    res.json(certificate)
})

module.exports = router