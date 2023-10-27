import express from "express"
import { getDoctors, addDoctors, updateDoctors, deleteDoctors } from "../controllers/doctor.js";

const router = express.Router();

router.get('/', getDoctors)

router.post('/', addDoctors)

router.put('/:id', updateDoctors)

router.delete('/:id', deleteDoctors)

export default router