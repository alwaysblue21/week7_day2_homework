require("dotenv").config()
const express = require("express");
const morgan = require("morgan") 
const PORT = process.env.PORT
const app = express() 
const drinks = require("./models/drinks");
const foods = require("./models/foods");


app.use(morgan("dev"))
app.use(express.static("public"))

app.get("/drinks/", (req, res) => {

    const capitalize = (text) => {
        const arr = text.split("")
        arr[0] = arr[0].toUpperCase()
        return arr.join("")
    }
    res.render("index.ejs", {capitalize, drinks, foods})
})

app.get("/drinks/:id", (req, res) => {
    const id = req.params.id
    const drink = drinks[id]
    
    res.render("show.ejs", {drink, id})
})

app.get("/foods/:id", (req, res) => {
    const id = req.params.id
    
    const food = foods[id]
    res.render("foods.ejs", {food, id})
})

// LISTENER
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})