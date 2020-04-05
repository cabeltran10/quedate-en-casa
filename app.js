const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
const logger = require("morgan");
const configurePassport = require("./configurePassport.js");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

configurePassport(app);

app.use("/", indexRouter);

//app.use("/", passportRouter);

// catch 404 and forward to error handler
// BORRÉ ESTE CÓDIGO PORQUE NO ESTAMOS USANDO HTTP ERRORS



// error handler
/*app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});*/

module.exports = app;
