let express = require("express");
let app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("admin/dashboard/index");
});

app.get("/banners", function (req, res) {
  res.render("admin/banners/index");
});


app.get("/banners/create", function (req, res) {
    res.render("admin/banners/form");
  });

  app.get("/banners/show/1", function (req, res) {
    res.render("admin/banners/show");
  });



app.listen(8080);
console.log("8080 is the magic port");
