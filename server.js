const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const db = require('./database/collection');

const authRoute = require('./routes/authRoute');
const cookieParser = require('cookie-parser');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// routes

app.use('/api', authRoute);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
