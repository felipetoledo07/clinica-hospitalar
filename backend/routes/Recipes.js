const express = require("express")
const router = express.Router()
const { Recipe, sequelize } = require("../models")
const { QueryTypes } = require("sequelize")

router.get("/", async (req, res) => {
    const listOfRecipes = await Recipe.findAll()
    res.json(listOfRecipes)
})

router.get("/pharmacy", async (req, res) => {
    const listOfRecipes = await sequelize.query(`
        select r.id, d.firstname as doctorFirstname, d.lastname as doctorLastname, p.firstname as patientFirstname, p.lastname as patientLastname, r.avaliability, r.expire_date
        from recipes r
        join appointments a on a.id = r.AppointmentId
        join doctors d on a.DoctorId = d.id
        join patients p on a.PatientId = p.id;
    `,{
        type: QueryTypes.SELECT
    })
    res.json(listOfRecipes)
})

router.get("/:id", async (req, res) => {
    const recipe = await Recipe.findByPk(req.params.id)
    res.json(recipe)
})

router.get("/pharmacy/:id", async (req, res) => {
    const recipe = await sequelize.query(`
        select r.id, r.description, d.firstname as doctorFirstname, d.lastname as doctorLastname, p.firstname as patientFirstname, p.lastname as patientLastname, r.avaliability, a.datetime
        from recipes r
        join appointments a on a.id = r.AppointmentId
        join doctors d on a.DoctorId = d.id
        join patients p on a.PatientId = p.id
        where r.id = ${req.params.id};
    `,{
        type: QueryTypes.SELECT
    })
    res.json(recipe)
})

router.post("/", async (req, res) => {
    const recipe = req.body;
    await Recipe.create(recipe);
    res.json(recipe);
})

router.put("/:id", async (req, res) => {
    const recipe = await Recipe.findByPk(req.params.id);
    const newRecipe = req.body;
    recipe.set({
        description: newRecipe.description,
        avaliability:  newRecipe.avaliability,
        DrugstoreId: newRecipe.DrugstoreId,
    })
    await recipe.save();
    res.json(recipe);
})

router.put("/pharmacy/:id", async (req, res) => {
    const recipe = await Recipe.findByPk(req.params.id);
    const newRecipe = req.body;
    recipe.set({
        avaliability:  0,
        DrugstoreId: newRecipe.DrugstoreId,
    })
    await recipe.save();
    res.json(recipe);
})

router.delete("/:id", async (req, res) => {
    const recipe = await Recipe.findByPk(req.params.id)
    await recipe.destroy()
    res.json(recipe)
})

module.exports = router