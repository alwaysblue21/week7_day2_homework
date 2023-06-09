const express = require("express");
const app = express() 
const drinks = require("./models/drinks")

app.get("/drinks/", (req, res) => {
    res.render("index.ejs", {drinks})
})

app.get("/drinks/:id", (req, res) => {
    res.send(req.params.id)
})

//Listener
app.listen(3000, () => {
    console.log("Listening on port 3000")
})