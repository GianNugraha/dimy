const express = require('express');
const app = express();
const router = require('./routes');
require('dotenv').config();
const cors = require('cors');

var corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

module.exports = app;
