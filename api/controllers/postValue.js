// Import modules
var data = require("../data/data.json");
var searchPosition = require("./arithmeticUnits/searchPosition.js");
var getMean = require("./arithmeticUnits/getMean.js");
var getMedian = require("./arithmeticUnits/getMedian.js");
var getMax = require("./arithmeticUnits/getMax.js");
var getMin = require("./arithmeticUnits/getMin.js");

// Adds new decimal Value to the data field of the given metric, while maintianing sorted order of data.
// Also computes min, max, mean, median for the metric and updates the metric JSON object.
exports.newValue = function(req, res){

	// Extract new value as a decimal
	var newValue = parseFloat(req.body.postValue)

    // If specified metric does not exist, send an error message.
    if(!data.hasOwnProperty(req.body.postName)){
		res.json({"message" :"Error: Metric does not exist. Enter a valid Metric Name."});
		return;
	}

    // If value is not a decimal, send an error message.
	if(isNaN(newValue)){
        res.json({"message" :"Error: Enter a decimal value for Metric Value."});
        return;
    }
    
    // Get position to insert value into sorted array
    var insertPosition = searchPosition.insert(newValue,data[req.body.postName]["data"])

    // Insert new value into data field
    data[req.body.postName]["data"].splice(insertPosition, 0, newValue);

    // number of values in the metric.
    var len = data[req.body.postName]["data"].length

    // Update mean for the metric
    data[req.body.postName]["mean"] = getMean.calculate(data[req.body.postName]["mean"],len,newValue);
    
    // Update median for the metric
    data[req.body.postName]["median"] = getMedian.calculate(data[req.body.postName]["data"],len);
    
    // Update max for the metric
    data[req.body.postName]["max"] = getMax.calculate(data[req.body.postName]["max"],newValue);
    
    // Update min for the metric
    data[req.body.postName]["min"] = getMin.calculate(data[req.body.postName]["min"],newValue);
    
    // Send success message.
    res.json({"message" :"Value posted successfully"});

}