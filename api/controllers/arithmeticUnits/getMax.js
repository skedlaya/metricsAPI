// Return max value by comparing old min value with new posted value
module.exports = {
	calculate: function(oldMax, newValue) {
		if(oldMax < newValue)
   	       return newValue;
   	    else
   	       return oldMax;    
	}
};