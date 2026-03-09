const express = require('express');
const exphbs = require('express-handlebars');
const hbs = require('hbs');
const path = require('path');

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("dashboard");
});

app.get("/dashboard", (req, res) => res.render("dashboard"));
app.get("/comunidad", (req, res) => res.render("comunidad"));
app.get("/hydroguard", (req, res) => res.render("hydroguard"));
app.get("/mapa", (req, res) => res.render("mapa"));
app.get("/recogida", (req, res) => res.render("recogida"));
app.get("/scanner", (req, res) => res.render("scanner"));
app.get("/silverUI", (req, res) => res.render("silverUI"));
app.get("/tokens", (req, res) => res.render("tokens"));

app.listen(12000, () => console.log("Servidor iniciado en el puerto 12000"));