import express from "express"
import userRoutes from "./routes/users.js"
import doctorRoutes from "./routes/doctors.js"
import patientsRoutes from "./routes/patients.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/user", userRoutes)
app.use("/doctor", doctorRoutes)
app.use("/patient", patientsRoutes)

app.listen(3000)