// Find position to insert an element into a sorted array.
// The algorithm used is binary search.
module.exports = {
    insert: function(element, array) {
	    var low = 0
	    var high = array.length-1

	    while(low <= high){
	  	    var mid = Math.floor((low +high) / 2);
	  	    if(array[mid] == element)
	  	  	    return mid;
	  	    else if(array[mid] > element)
	  	  	    high = mid - 1;
	  	    else
	  	  	    low = mid + 1;
	    }
	    return Math.floor(low);
    }
};