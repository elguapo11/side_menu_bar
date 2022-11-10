require("dotenv").config();
const { PORT } = process.env;


const express = require("express");
const app = express();


app.get("/", (req, res) => {
   console.log("hello world")
   res.send("I love Sarah")
});


app.listen(PORT , () => console.log(`listeninging on port ${PORT}`));
