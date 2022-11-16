require("dotenv").config();
const { PORT } = process.env;


const express = require("express");
const app = express();


app.set('view engine', 'ejs')

app.get("/", (req, res) => {
   console.log("hello world")
   res.render("index.ejs")
});

app.put()

app.listen(PORT , () => console.log(`listeninging on port ${PORT}`));
