const express = require("express")
const router = express.Router()
const { Drugstore } = require("../models")
const bcrypt = require('bcrypt')

const {sign} = require("jsonwebtoken")



router.get("/", async (req, res) => {
    const listOfDrugstores = await Drugstore.findAll()
    res.json(listOfDrugstores)
})

router.get("/:id", async (req, res) => {
    const drugstore = await Drugstore.findByPk(req.params.id)
    res.json(drugstore)
})

router.post("/", async (req, res) => {
    const drugstore = req.body;
    bcrypt.hash(drugstore.password, 10).then((hash) => {
        Drugstore.create({
            name: drugstore.name,
            cnpj: drugstore.cnpj,
            password: hash,
        })
    })
    res.json("SUCCESS");
})

router.post("/login", async (req, res) => {

    const {cnpj, password} = req.body;
    
    const drugstore = await Drugstore.findOne({ where: { cnpj: cnpj }})

    if (!drugstore)
        res.json({ error: "User does not exist"})
     else {
        bcrypt.compare(password, drugstore.password).then((match) => {
            
            if (!match) {
                res.json({ error: "Wrong password"})
            } else {

                const accessToken = sign({cnpj: drugstore.cnpj, id: drugstore.id}, "importantsecret")

                res.json(accessToken)
            }
        })
    }
})

router.put("/:id", async (req, res) => {
    const drugstore = await Drugstore.findByPk(req.params.id);
    const newDrugstore = req.body;
    drugstore.set({
        cnpj: newDrugstore.cnpj,
        password:  newDrugstore.password,
    })
    await drugstore.save();
    res.json(drugstore);
})

router.delete("/:id", async (req, res) => {
    const drugstore = await Drugstore.findByPk(req.params.id)
    await drugstore.destroy()
    res.json(drugstore)
})

module.exports = router