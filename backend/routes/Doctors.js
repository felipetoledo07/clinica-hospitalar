const express = require("express")
const router = express.Router()
const { Doctor } = require("../models")

router.get("/", async (req, res) => {
    const listOfDoctors = await Doctor.findAll()
    res.json(listOfDoctors)
})

router.get("/:id", async (req, res) => {
    const doctor = await Doctor.findByPk(req.params.id)
    res.json(doctor)
})

router.post("/", async (req, res) => {
    const doctor = req.body;
    await Doctor.create(doctor);
    res.json(doctor);
})

router.put("/:id", async (req, res) => {
    const doctor = await Doctor.findByPk(req.params.id);
    const newDoctor = req.body;
    doctor.set({
        firstname: newDoctor.firstname,
        lastname:  newDoctor.lastname,
        specialization:  newDoctor.specialization,
        openning_hours:  newDoctor.openning_hours,
    })
    await doctor.save();
    res.json(doctor);
})

router.delete("/:id", async (req, res) => {
    const doctor = await Doctor.findByPk(req.params.id)
    await doctor.destroy()
    res.json(doctor)
})

module.exports = router