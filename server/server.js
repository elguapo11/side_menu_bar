require("dotenv").config();
const { PORT } = process.env;


const express = require("express");
const app = express();



app.get("/", (req, res) => {
    res.send("Hi there");
});

app.listen(() => {
    console.log(`Listening on the port ${PORT}`);
});