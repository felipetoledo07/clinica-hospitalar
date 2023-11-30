const express = require("express")
const router = express.Router()
const { Appointment, sequelize } = require("../models")
const { QueryTypes } = require("sequelize")

router.get("/", async (req, res) => {
    const listOfAppointments = await sequelize.query(`
    select a.id, CONCAT(d.firstname, ' ', d.lastname) as doctorName,  CONCAT(p.firstname, ' ', p.lastname) as patientName, s.description, a.datetime 
    from appointments a
    join doctors d on d.id = a.DoctorId
    join patients p on p.id = a.PatientId
    join statuses s on s.id = a.StatusId;
    `,{
        type: QueryTypes.SELECT
    })
    res.json(listOfAppointments)
})

router.get("/patientmobile/:id", async (req, res) => {
    const listOfAppointments = await sequelize.query(`
    select a.id, CONCAT(d.firstname, ' ', d.lastname) as doctorName,  CONCAT(p.firstname, ' ', p.lastname) as patientName, s.description, a.datetime 
    from appointments a
    join doctors d on d.id = a.DoctorId
    join patients p on p.id = a.PatientId
    join statuses s on s.id = a.StatusId
    where p.id = ${req.params.id};
    `,{
        type: QueryTypes.SELECT
    })
    res.json(listOfAppointments)
})

router.get("/done/", async (req, res) => {

    const id = req.query.id;

    const appointment = await sequelize.query(`
    select a.id as AppointmentId, CONCAT(d.firstname, ' ', d.lastname) as doctorName, s.description, a.datetime, r.description as recipeDescription, re.description as recordDescription, c.description as certificateDescription, c.suspention
    from appointments a
    join doctors d on d.id = a.DoctorId
    join patients p on p.id = a.PatientId
    join statuses s on s.id = a.StatusId
    join recipes r on r.appointmentId = a.id
    join records re on re.appointmentId = a.id
    join certificates c on c.appointmentId = a.id
    where a.id = ${id};
    `,{
        type: QueryTypes.SELECT
    })
    res.json(appointment)
})

router.get("/:id", async (req, res) => {
    const appointment = await sequelize.query(`
    select a.id, CONCAT(p.firstname, ' ', p.lastname) as patientName, s.description, a.datetime 
    from appointments a
    join patients p on p.id = a.PatientId
    join statuses s on s.id = a.StatusId
    where a.id = ${req.params.id}
    `,{
        type: QueryTypes.SELECT
    })
    res.json(appointment)
})

router.get("/patient/:id", async (req, res) => {
    const appointment = await sequelize.query(`
    select a.id as AppointmentId, CONCAT(d.firstname, ' ', d.lastname) as doctorName, s.description, a.datetime 
    from appointments a
    join doctors d on d.id = a.DoctorId
    join patients p on p.id = a.PatientId
    join statuses s on s.id = a.StatusId
    where p.id = ${req.params.id};
    `,{
        type: QueryTypes.SELECT
    })
    res.json(appointment)
})

router.get("/done/:id", async (req, res) => {
    const appointment = await sequelize.query(`
    select a.id as AppointmentId, CONCAT(d.firstname, ' ', d.lastname) as doctorName, s.description, a.datetime, r.description as recipeDescription, re.description as recordDescription, c.description as certificateDescription, c.suspention
    from appointments a
    join doctors d on d.id = a.DoctorId
    join patients p on p.id = a.PatientId
    join statuses s on s.id = a.StatusId
    join recipes r on r.appointmentId = a.id
    join records re on re.appointmentId = a.id
    join certificates c on c.appointmentId = a.id
    where a.id = ${req.params.id};
    `,{
        type: QueryTypes.SELECT
    })
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

router.put("/done/:id", async (req, res) => {
    const appointment = await Appointment.findByPk(req.params.id);
    appointment.set({
        StatusId: 2,
    })
    await appointment.save();
    res.json(appointment);
})

router.put("/cancel/:id", async (req, res) => {
    const appointment = await Appointment.findByPk(req.params.id);
    appointment.set({
        StatusId: 1,
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