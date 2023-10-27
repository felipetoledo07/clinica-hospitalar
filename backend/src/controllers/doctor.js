import { db } from "../database.js"

export const getDoctors = (_, res) => {
    const q = "SELECT * FROM doctors"

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}

export const addDoctors = (req, res) => {
    const q = 
        "INSERT INTO doctors (`firstname`, `lastname`, `crm`, `specialization`, `openning_hours`) values (?)";

    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.crm,
        req.body.specialization,
        req.body.openning_hours
    ]

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Médico criado com sucesso.")
    })
}

export const updateDoctors = (req, res) => {
    const q = 
        "UPDATE doctors SET `firstname` = ?, `lastname` = ?, `crm` = ?, `specialization` = ?, `openning_hours` = ? WHERE `id` = ?";

    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.crm,
        req.body.specialization,
        req.body.openning_hours
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Médico atualizado com sucesso.");
    });
}

export const deleteDoctors = (req, res) => {
    const q =
        "DELETE FROM doctors WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Médico deletado com sucesso.")
    });
}
