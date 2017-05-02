//Module dependencies.
var express = require('express');
var http = require('http');
var path = require('path');
var cors = require('cors')
var handlebars = require('express3-handlebars')
var app = express();

app.use(cors())
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

//Set port
app.set('port', process.env.PORT || 3000);

//Routes
var index = require('./routes/index');
app.get('/', index.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
