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



db.sequelize.sync().then(() => {
    app.listen(3000)
})

