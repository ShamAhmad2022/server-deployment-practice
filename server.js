'use strict';

const express = require('express');
const cors = require('cors');

const stamper = require('./Middleware/stamper');
const pageNotFoundHandler = require('./Middleware/404');
const serverError = require('./Middleware/500')

const app = express();
app.use(cors());


app.get('/', stamper, homeHandler);
app.get('/error', intentionalErrorsHandler);

app.use('*', pageNotFoundHandler)
app.use(serverError)


function homeHandler (req, res) {
    res.status(200).json({
        code:200,
        message: 'Welcome to the Home page :)',
        time: req.stamper
    })
}

function intentionalErrorsHandler(req, res, next) {
    req.body={
        test: 'test'
    }
    next(message = {test : 'test bla'})
}

function start(port){
    app.listen(port, ()=> console.log(`Up and running on port ${port}`))
}

module.exports = {
    app,
    start
};