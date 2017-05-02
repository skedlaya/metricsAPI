module.exports = {
	calculate: function(oldMean, len, newValue) {
		return (oldMean*(len-1) + newValue)/len;
	}
};