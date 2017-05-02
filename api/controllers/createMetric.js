//import data
var data = require("../data/data.json");

// Creates a new metric given a metric name
exports.newMetric = function(req, res){
	// Create a JSON onject for the new metric with default values.
	newData =    {  
      "data" : [],
	  "mean" : 0,
	  "median": 0,
	  "max" : Number.NEGATIVE_INFINITY,
	  "min": Number.POSITIVE_INFINITY
	};

	// If metric already exists for specified name, send an error message.
	if(data.hasOwnProperty(req.body.metricName)){
		res.json({"message" :"Error: Metric exists. Enter a new name"});
	}
	// Add new JSON object for the new metric name
	else if(req.body.metricName){
        data[req.body.metricName]=newData;
        res.json({"message" : "Metric has been created successfully"});
    }
    // If specified metric name is empty, send an error message.
    else{
      res.json({"message" :"Error: Please enter a Metric Name"});
    }     
}