'use strict';
// API Calls
$(document).ready(function() {
    // Call to create a metric
	$('#createMetric').submit(function(event){		
		event.preventDefault();
        
		$.ajax({
            url: "http://127.0.0.1:8081/createMetric", 
            type: "POST", 
            data:  $("#createMetric").serialize(), 
            dataType: 'json',
            cache: false,
            success: function(response){  
                // Insert response into html
                document.getElementById("createMsg").innerHTML = response["message"]                                           
            },
            error: function(obj, status, error){
            	console.log("Error: "+ error);
            }
        });

	});

    // Call to post value to a metric
	$('#postValue').submit(function(event){		
		event.preventDefault();
        
		$.ajax({
            url: "http://127.0.0.1:8081/postValue", 
            type: "POST", 
            data:  $("#postValue").serialize(), 
            dataType: 'json',
            cache: false,
            success: function(response){   
                // Insert response into html                       
                document.getElementById("postMsg").innerHTML = response["message"]                   
            },
            error: function(obj, status, error){
            	console.log("Error: "+ error);
            }          
        });
	});

    // Call to get statistics of a metric
	$('#getStats').submit(function(event){		

		event.preventDefault();
        
		$.ajax({
            url: "http://127.0.0.1:8081/getStats", 
            type: "POST", 
            data:  $("#getStats").serialize(), 
            dataType: 'json',
            cache: false,
            success: function(response){ 
                // Insert response into html  
                if(response["message"].indexOf("Error") == -1){
	                document.getElementById("meanStat").innerHTML = "MEAN: " + response["stats"]["mean"];             
	                document.getElementById("medianStat").innerHTML = "MEDIAN: " + response["stats"]["median"];             
	                document.getElementById("maxStat").innerHTML = "MAX: " + response["stats"]["max"];             
	                document.getElementById("minStat").innerHTML = "MIN: " + response["stats"]["min"];     
	            }
	            else{
                    document.getElementById("meanStat").innerHTML = response["message"]
  	                document.getElementById("medianStat").innerHTML = "";             
	                document.getElementById("maxStat").innerHTML = "";             
	                document.getElementById("minStat").innerHTML = "";     

	            }        
            }    
        });
	});
});