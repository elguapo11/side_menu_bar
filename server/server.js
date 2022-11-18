require("dotenv").config();
const { PORT } = process.env;


const express = require("express");
const app = express();


app.set('view engine', 'ejs')

app.get("/", (req, res) => {
   console.log("hello world")
   res.render("index.ejs")
});


app.get("/new", (req, res) => {
   console.log("hello new page")
   res.render("new.ejs")
});



app.listen(PORT , () => console.log(`listeninging on port ${PORT}`));
