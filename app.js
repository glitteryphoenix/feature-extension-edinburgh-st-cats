var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const catsRouter = require("./routes/cats");
const getCommentsRouter = require("./routes/getComments");
const postCommentsRouter = require("./routes/postComments");

var app = express();

app.use(cors({ origin: "*" }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ✅ Debugging logs to confirm routes are loading
console.log("✅ Loading routes:");
console.log("- /api/index");
console.log("- /api/users");
console.log("- /api/cats");
console.log("- /api/comments");
console.log("- /api/comments/new");

app.use("/api/index", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/cats", catsRouter);
app.use("/api/comments", getCommentsRouter);
app.use("/api/comments", postCommentsRouter);

console.log("✅ All routes loaded successfully.");

module.exports = app;

