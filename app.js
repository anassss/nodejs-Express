var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

//configure app

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//use middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(session({secret: '123456789'}));

//define routes

app.use(require('./controllers/login'));
app.use(require('./controllers/todos'));

//start server

var port = process.env.PORT || 1337;

app.listen(port,function(){
	console.log('server start listing at port '+port);
});