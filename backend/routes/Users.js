const express = require("express")
const router = express.Router()
const { User } = require("../models/")

router.get("/", async (req, res) => {
    const listOfUsers = await User.findAll()
    res.json(listOfUsers)
})

router.get("/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.json(user)
})

router.post("/", async (req, res) => {
    const user = req.body;
    await User.create(user);
    res.json(user);
})

router.put("/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id);
    const newUser = req.body;
    user.set({
        username: newUser.username,
        password:  newUser.password
    })
    await user.save();
    res.json(user);
})

router.delete("/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id)
    await user.destroy()
    res.json(user)
})


module.exports = router