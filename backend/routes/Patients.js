const express = require("express")
const router = express.Router()
const { Patient } = require("../models")
const bcrypt = require('bcrypt')

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
    bcrypt.hash(patient.password, 10).then((hash) => {
        Patient.create({
            firstname: patient.firstname,
            lastname: patient.lastname,
            cpf: patient.cpf,
            password: hash,
            birth_date: patient.birth_date,
            address: patient.address,
        })
    })
    res.json("SUCCESS");
})

router.post("/login", async (req, res) => {

    const {cpf, password} = req.body;
    
    const patient = await Patient.findOne({ where: { cpf: cpf }})

    if (!patient) {
        res.status(403)
        res.send()
    } else {
        bcrypt.compare(password, patient.password).then((match) => {
            
            if (!match) {
                res.status(401)
                res.send()
            } else {

                // res.status(200)
                res.json({
                    id: patient.id
                })
                
            }
        })
    }
    
    
    
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