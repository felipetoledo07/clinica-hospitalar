const express = require("express")
const router = express.Router()
const { Patient } = require("../models")

router.get("/", async (req, res) => {
    const listOfPatients = await Patient.findAll()
    res.json(listOfPatients)
})

router.get("/:id", async (req, res) => {
    const patient = await Patient.findByPk(req.params.id)
    res.json(patient)
})

router.post("/", async (req, res) => {
    const patient = req.body;
    await Patient.create(patient);
    res.json(patient);
})

router.put("/:id", async (req, res) => {
    const patient = await Patient.findByPk(req.params.id);
    const newPatient = req.body;
    patient.set({
        firstname: newPatient.firstname,
        lastname:  newPatient.lastname,
        cpf:  newPatient.cpf,
        password:  newPatient.password,
        birth_date:  newPatient.birth_date,
        address:  newPatient.address,
    })
    await patient.save();
    res.json(patient);
})

router.delete("/:id", async (req, res) => {
    const patient = await Patient.findByPk(req.params.id)
    await patient.destroy()
    res.json(patient)
})

module.exports = router