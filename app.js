const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');

//const userRoutes = require('./api/routes/user');
const contactUsRoutes = require('./api/routes/contact');

mongoose.connect("mongodb+srv://node-shop:node-shop@node-shop-rest-slxeu.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });

mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(express.static('../client/dist/client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.get('/', function(req,res) {
  res.sendFile('index.html', { root: '../client/dist/client'});
})

// Routes which should handle requests
//app.use("/api/user", userRoutes);
app.use("/api/contact", contactUsRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
