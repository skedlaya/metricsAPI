// Import data
var data = require("../data/data.json");

// Gets statistics summary for a specified metric
exports.getSummary = function(req, res){
    // If specified metric does not exist, send an error message.
    if(!data.hasOwnProperty(req.body.statName)){
		res.json({"message" :"Error: Metric does not exist. Enter a valid Metric Name."});
		return;
	}

	// If there are no values in the metric, send an error message.
	if(data[req.body.statName]["data"].length == 0){
		res.json({"message" :"Error: No data exists for this Metric"});
		return;		
	}

	// Send data, max, min, median and mean for the specified metric as a JSON object.
    res.json({"message": "Statistics Results:", "stats": data[req.body.statName]});;
}