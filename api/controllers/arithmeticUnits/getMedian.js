// Calculate median given an array and length of the array
module.exports = {
	calculate: function(dataArray, len) {
    var lowerIndex = Math.floor((len-1)/2);
    var upperIndex = Math.ceil((len-1)/2);
    var median;
    if((len) % 2 != 0)
    	median = dataArray[lowerIndex];
    else
        median = (dataArray[lowerIndex] + dataArray[upperIndex])/2;
   
	return median;
	}
};