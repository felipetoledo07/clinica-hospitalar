const express = require("express")
const router = express.Router()
const { MedicalAppointment } = require("../models")

router.get("/", async (req, res) => {
    const listOfMedicalAppointments = await MedicalAppointment.findAll()
    res.json(listOfMedicalAppointments)
})

router.get("/:id", async (req, res) => {
    const medicalAppointment = await MedicalAppointment.findByPk(req.params.id)
    res.json(medicalAppointment)
})

router.post("/", async (req, res) => {
    const medicalAppointment = req.body;
    await MedicalAppointment.create(medicalAppointment);
    res.json(medicalAppointment);
})

router.put("/:id", async (req, res) => {
    const medicalAppointment = await MedicalAppointment.findByPk(req.params.id);
    const newMedicalAppointment = req.body;
    medicalAppointment.set({
        description: newMedicalAppointment.description,
        datetime:  newMedicalAppointment.datetime,
        StatusId: newMedicalAppointment.StatusId,
    })
    await medicalAppointment.save();
    res.json(medicalAppointment);
})

router.delete("/:id", async (req, res) => {
    const medicalAppointment = await MedicalAppointment.findByPk(req.params.id)
    await medicalAppointment.destroy()
    res.json(medicalAppointment)
})

module.exports = router