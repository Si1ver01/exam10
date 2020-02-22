const { Router } = require("express");
const { check, validationResult } = require("express-validator");

const { connection } = require("../mySQL");
const upload = require("../multer");

const route = Router();


module.exports = route;
