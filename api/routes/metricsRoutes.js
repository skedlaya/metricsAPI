'use strict';
module.exports = function(app) {
  // import modules
  var createMetric = require('../controllers/createMetric');
  var postValue = require('../controllers/postValue');
  var getStats = require('../controllers/getStats');

  // Routes
  app.post('/createMetric',createMetric.newMetric);
  app.post('/postValue',postValue.newValue);
  app.post('/getStats',getStats.getSummary);
};