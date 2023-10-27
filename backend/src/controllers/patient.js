import { db } from "../database.js"

export const getPatients = (_, res) => {
    const q = "SELECT * FROM patients"

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}

export const addPatients = (req, res) => {
    const q = 
        "INSERT INTO patients (`firstname`, `lastname`, `cpf`, `telefone`, `birth_date`) values (?)";

    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.cpf,
        req.body.telefone,
        req.body.birth_date
    ]

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Paciente criado com sucesso.")
    })
}

export const updatePatients = (req, res) => {
    const q = 
        "UPDATE patients SET `firstname` = ?, `lastname` = ?, `cpf` = ?, `telefone` = ?, `birth_date` = ? WHERE `id` = ?";

        const values = [
            req.body.firstname,
            req.body.lastname,
            req.body.cpf,
            req.body.telefone,
            req.body.birth_date
        ]

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Paciente atualizado com sucesso.");
    });
}

export const deletePatients = (req, res) => {
    const q =
        "DELETE FROM patients WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Paciente deletado com sucesso.")
    });
}
