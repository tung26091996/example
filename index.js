const express = require("express");
const app = express();
app.set("views", "views");
app.set("view engine", "ejs");

app.get("/login", function (req, res) {
    res.render("login");
});

app.post("/save", function (req, res) {
    var information = {
        "username": req.body.username,
        "password": req.body.password
    };
    res.render("detail", information)
});

app.listen(6789, function () {
    console.log("succsess")
});