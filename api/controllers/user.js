const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.user_signup = (req, res, next) => {

  res.status(200).json({ msg: "user_signup works" })

};

exports.user_login = (req, res, next) => {
  res.status(200).json({ msg: "user_login works" })
};

exports.user_delete = (req, res, next) => {
  res.status(200).json({ msg: "user_delete works" })

};
