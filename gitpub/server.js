const express = require("express");
const app = express()
// const PORT = process.env.PORT 

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

//Listener
app.listen(3000, () => {
    console.log("Listening on port 3000")
})