const express = require('express');
const app = express();
const cors = require("cors")

app.use(express.json())
app.use(cors())

const db = require("./models");

// Routers
const userRouter = require("./routes/Users");
app.use("/users", userRouter)

const doctorRouter = require("./routes/Doctors");
app.use("/doctors", doctorRouter)

const patientRouter = require("./routes/Patients");
app.use("/patients", patientRouter)

db.sequelize.sync().then(() => {
    app.listen(3000)
})

