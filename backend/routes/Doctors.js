const express = require("express")
const router = express.Router()
const { Doctor } = require("../models")
const bcrypt = require('bcrypt')

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
    bcrypt.hash(doctor.password, 10).then((hash) => {
        Doctor.create({
            firstname: doctor.firstname,
            lastname: doctor.lastname,
            cpf: doctor.cpf,
            password: hash,
            medical_license: doctor.medical_license,
            openning_hours: doctor.openning_hours,
            RoleId: doctor.RoleId
        })
    })
    res.json("SUCCESS");
})

router.post("/login", async (req, res) => {

    const {cpf, password} = req.body;
    
    const doctor = await Doctor.findOne({ where: { cpf: cpf }})

    if (!doctor) {
        res.json({ error: "User does not exist"})
    } else {
        bcrypt.compare(password, doctor.password).then((match) => {
            
            if (!match) {
                res.json({ error: "Wrong password"})
            } else {
                res.json("YOU LOGGED IN")
            }
    
        })
    }

    
})

router.put("/:id", async (req, res) => {
    const doctor = await Doctor.findByPk(req.params.id);
    const newDoctor = req.body;
    doctor.set({
        firstname: newDoctor.firstname,
        lastname:  newDoctor.lastname,
        cpf:  newDoctor.cpf,
        password:  newDoctor.password,
        medical_license:  newDoctor.medical_license,
        oppening_hours:  newDoctor.openning_hours,
        RoleId:  newDoctor.RoleId,
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