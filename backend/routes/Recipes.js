const express = require("express")
const router = express.Router()
const { Recipe } = require("../models")

router.get("/", async (req, res) => {
    const listOfRecipes = await Recipe.findAll()
    res.json(listOfRecipes)
})

router.get("/:id", async (req, res) => {
    const recipe = await Recipe.findByPk(req.params.id)
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

router.delete("/:id", async (req, res) => {
    const recipe = await Recipe.findByPk(req.params.id)
    await recipe.destroy()
    res.json(recipe)
})

module.exports = router