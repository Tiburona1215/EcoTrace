const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine("hbs", engine({
    extname: ".hbs",
    partialsDir: "./views/partials",
}));

app.set("view engine", "hbs");
app.set("views", "./views");

app.get("/dashboard", (req, res) => res.render("dashboard"));
app.get("/comunidad", (req, res) => res.render("comunidad"));
app.get("/hydroguard", (req, res) => res.render("hydroguard"));
app.get("/mapa", (req, res) => res.render("mapa"));
app.get("/recogida", (req, res) => res.render("recogida"));
app.get("/scanner", (req, res) => res.render("scanner"));
app.get("/silverUI", (req, res) => res.render("silverUI"));
app.get("/tokens", (req, res) => res.render("tokens"));

app.listen(1212, () => console.log("Servidor iniciado en el puerto 1212"));