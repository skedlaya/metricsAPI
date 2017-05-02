//Import modules to test
var searchPosition = require("../searchPosition.js");
var getMean = require("../getMean.js");
var getMedian = require("../getMedian.js");
var getMax = require("../getMax.js");
var getMin = require("../getMin.js");

// Format of test case: 
//[array, postedValue, oldMean, oldMax, oldMin, newArray, insertPosition, Mean, Median, Max, Min]
var tests = new Array ( );
tests[0] = new Array ([2,3],4,2.5,3,2,[2,3,4],2,3,3,4,2);
tests[1] = new Array ([-1,1],3,0,1,-1,[-1,1,3],2,1,1,3,-1);
tests[2] = new Array([],1,0,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,[1],0,1,1,1,1)
tests[3] = new Array([],-5.5,0,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,[-5.5],0,-5.5,-5.5,-5.5,-5.5)
tests[4] = new Array([-3.5,-1,0,9],-20,1.125,9,-3.5,[-20,-3.5,-1,0,9],0,-3.1,-1,9,-20);
tests[5] = new Array([-10,0,10],0,0,10,-10,[-10,0,0,10],1,0,0,10,-10);
tests[6] = new Array([100],101,100,100,100,[100,101],1,100.5,100.5,101,100);

var resultCount = 0;

for (var i = 0; i < tests.length; i++) {
	var passCount = 0;

	// Test position to insert new value in the sorted array
    var insertPosition = searchPosition.insert(tests[i][1],tests[i][0])
    if(insertPosition == tests[i][6])
    	passCount++;
    else
    	console.log("Failed searchPosition() : " + insertPosition + " Test : " + tests[i]);
    
    // Test mean after insertion of new value
    var mean = getMean.calculate(tests[i][2],tests[i][5].length,tests[i][1]);
    if(mean == tests[i][7])
    	passCount++;
    else
		console.log("Failed getMean() : " + mean + "Test : "+ tests[i]);
    
    // Test median after insertion of new value
    var median = getMedian.calculate(tests[i][5],tests[i][5].length);
    if(median == tests[i][8])
    	passCount++;
    else
    	console.log("Failed getMedian() : " + median + "Test : "+ tests[i]);

    // Test max after insertion of new value
    var max = getMax.calculate(tests[i][3],tests[i][1]);
	if(max == tests[i][9])
		passCount++;
	else
		console.log("Failed getMax() : " + max + "Test : "+ tests[i]);

    // Test min after insertion of new value
    var min = getMin.calculate(tests[i][4],tests[i][1]);
	if(min == tests[i][10])
		passCount++;
    else
		console.log("Failed getMin() : " + min + "Test : "+ tests[i]);
 
    // Pass test case only if all 5 conditions pass.
    if(passCount == 5)
    	resultCount++;

}

// Print results of the test
console.log(resultCount + " test cases out of " + tests.length + " passed.");