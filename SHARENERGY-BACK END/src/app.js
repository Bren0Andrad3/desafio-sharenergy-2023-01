'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors')

const app = express();
const router = express.Router();

// Connecta ao banco

mongoose.connect(config.connectionString);


// Carrega os Models

const Customer = require('./models/customer');



// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const customerRoute = require('./routes/customer-route');
const randomDogRoute = require('./routes/randomDog-route');
const catRoute = require('./routes/cat-route');
const randomUserRoute = require('./routes/randomUser-route');


app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use(cors());
app.use('/', indexRoute);
app.use('/customers', customerRoute);
app.use('/RandomDog', randomDogRoute);
app.use('/Cat', catRoute);
app.use('/RandomUser', randomUserRoute);


module.exports = app;