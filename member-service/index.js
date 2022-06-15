require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes');
const morgan = require('morgan');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/orgs', router);

module.exports = app;