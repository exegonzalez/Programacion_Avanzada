const express = require("express");
const Handlebars = require("hbs");
const port = process.env.PORT || 3000;

//App instance
const app = express();

//App properties
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");

//Handlebars properties
Handlebars.registerPartials(__dirname + '/views/partials');

//Renders Principal Views
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});


//Render Partials Views

//Pages Partials
app.get("/about", (req, res) => {
  res.render("./partials/about");
});

app.get("/documentation", (req, res) => {
  res.render("./partials/documentation");
});

app.get("/design_styles", (req, res) => {
  res.render("./partials/design_styles");
});

//Portfolio Partials
app.get("/portfolio-alt", (req, res) => {
  res.render("./partials/portfolio-alt");
});

app.get("/portfolio-raw", (req, res) => {
  res.render("./partials/portfolio-raw");
});

app.get("/portfolio-masonry", (req, res) => {
  res.render("./partials/portfolio-masonry");
});

app.get("/portfolio-item", (req, res) => {
  res.render("./partials/portfolio-item");
});

app.get("/portfolio-hover", (req, res) => {
  res.render("./partials/portfolio-hover");
});

//Blog Partials
app.get("/blog-post", (req, res) => {
  res.render("./partials/blog-post");
});

//Listen app
app.listen(port, () => {
  console.log(`Aplication running at port: ${port}`);
});
