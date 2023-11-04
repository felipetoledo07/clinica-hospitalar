const express = require('express');
const app = express();
const cors = require("cors")

app.use(express.json())
app.use(cors())

const db = require("./models");

// Routers
const doctorRouter = require("./routes/Doctors");
app.use("/doctors", doctorRouter)

const patientRouter = require("./routes/Patients");
app.use("/patients", patientRouter)

const roleRouter = require("./routes/Roles");
app.use("/roles", roleRouter)

const drugstoreRouter = require("./routes/Drugstores");
app.use("/drugstores", drugstoreRouter)

const statusRouter = require("./routes/Statuses");
app.use("/status", statusRouter)

const appointmentRouter = require("./routes/Appointments");
app.use("/appointments", appointmentRouter)

const recordRouter = require("./routes/Records");
app.use("/records", recordRouter)

const certificateRouter = require("./routes/Certificates");
app.use("/certificates", certificateRouter)

const recipeRouter = require("./routes/Recipes");
app.use("/recipes", recipeRouter)

db.sequelize.sync().then(() => {
    app.listen(3000)
})

