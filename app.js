var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const catsRouter = require('./routes/cats'); 
const getCommentsRouter = require("./routes/getComments");
const postCommentsRouter = require("./routes/postComments"); // ✅ Fixed import name

var app = express(); 

app.use(cors({ origin: "*" }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/index', indexRouter);
app.use('/api/users', usersRouter);
app.use("/api/cats", catsRouter);
app.use("/api/comments", getCommentsRouter);
app.use("/api/comments/new", postCommentsRouter); // ✅ Different route path

module.exports = app;

