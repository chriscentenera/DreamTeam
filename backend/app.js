var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var playersRouter = require('./routes/players');
var teamsRouter = require('./routes/teams');
var usersRouter = require('./routes/users');



var app = express();

// var mongoDB = {"mongodb":"mango"}
// app.set('mongodb', mongoDB)

// band-aid solution for CORS
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/', indexRouter);
app.use('/players', playersRouter);
app.use('/teams', teamsRouter);
app.use('/users', usersRouter);

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

module.exports = app;
