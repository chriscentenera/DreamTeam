var createError = require('http-errors');
var path = require('path');
var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
var routeDir = './routes'
var logLevel = process.env.LOG_LEVEL || 'dev'

// band-aid solution for CORS
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
});

app.use(logger(logLevel));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); 


if (process.env.SERVICE) {
    loadService(app, process.env.SERVICE, routeDir)
} else {
    console.log('Endpoint: ALL' )
    fs.readdirSync(routeDir).forEach(service => {
        loadService(app, service, routeDir)
    })
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.send('error');
});

function loadService(app, service, routeDir) {
    var serviceEndpoint = '/' + service;
    var serviceFilePath = routeDir + '/' + service + '/' + service;
    var serviceFile = require(serviceFilePath);

    console.log('Endpoint: ' + serviceEndpoint)
    app.use(serviceEndpoint, serviceFile);
}

module.exports = app;
