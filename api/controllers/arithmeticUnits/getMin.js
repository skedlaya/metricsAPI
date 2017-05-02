module.exports = {
	calculate: function(oldMin, newValue) {
		if(oldMin > newValue)
   	       return newValue;
   	    else
   	       return oldMin;    
	}
};