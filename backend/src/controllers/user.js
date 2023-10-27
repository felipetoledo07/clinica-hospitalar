import { db } from "../database.js"

export const getUsers = (_, res) => {
    const q = "SELECT * FROM users"

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}

export const addUsers = (req, res) => {
    const q = 
        "INSERT INTO users (`name`, `username`, `password`) values (?)";

    const values = [
        req.body.name,
        req.body.username,
        req.body.password
    ]

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.")
    })
}

export const updateUsers = (req, res) => {
    const q = 
        "UPDATE users SET `name` = ?, `username` = ?, `password` = ? WHERE `id` = ?";

    const values = [
        req.body.name,
        req.body.username,
        req.body.password
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Usuário atualizado com sucesso.");
    });
}

export const deleteUsers = (req, res) => {
    const q =
        "DELETE FROM users WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.")
    });
}
