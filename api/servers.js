//Module dependencies.
var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var cors = require('cors')
var handlebars = require('express3-handlebars')
bodyParser = require('body-parser');
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
var routes = require("./routes/metricsRoutes");
routes(app);
port = process.env.PORT || 3000;

var server = app.listen(8081, function () {
  console.log('Express server listening on port ' + server.address().port);
})

