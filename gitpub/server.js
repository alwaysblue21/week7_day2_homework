require("dotenv").config()
const express = require("express");
const morgan = require("morgan") 
const PORT = process.env.PORT
const app = express() 
const drinks = require("./models/drinks")


app.use(morgan("dev"))
app.use(express.static("public"))

app.get("/drinks/", (req, res) => {
    res.render("index.ejs", {drinks})
})

app.get("/drinks/:id", (req, res) => {
    const id = req.params.id
    const drink = drinks[id]
    res.render("show.ejs", {drink, id})
})

// LISTENER
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})