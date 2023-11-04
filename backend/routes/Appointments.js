const express = require("express")
const router = express.Router()
const { Appointment } = require("../models")

router.get("/", async (req, res) => {
    const listOfAppointments = await Appointment.findAll()
    res.json(listOfAppointments)
})

router.get("/:id", async (req, res) => {
    const appointment = await Appointment.findByPk(req.params.id)
    res.json(appointment)
})

router.post("/", async (req, res) => {
    const appointment = req.body;
    await Appointment.create(appointment);
    res.json(appointment);
})

router.put("/:id", async (req, res) => {
    const appointment = await Appointment.findByPk(req.params.id);
    const newAppointment = req.body;
    appointment.set({
        description: newAppointment.description,
        datetime:  newAppointment.datetime,
        StatusId: newAppointment.StatusId,
    })
    await appointment.save();
    res.json(appointment);
})

router.delete("/:id", async (req, res) => {
    const appointment = await Appointment.findByPk(req.params.id)
    await appointment.destroy()
    res.json(appointment)
})

module.exports = router