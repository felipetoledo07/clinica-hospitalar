import express from "express"
import { getPatients, addPatients, updatePatients, deletePatients } from "../controllers/patient.js";

const router = express.Router();

router.get('/', getPatients)

router.post('/', addPatients)

router.put('/:id', updatePatients)

router.delete('/:id', deletePatients)

export default router