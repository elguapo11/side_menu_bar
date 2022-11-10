const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Hi there");
});

app.listen(3000, () => {
    console.log("Listening on the port 3000...");
});