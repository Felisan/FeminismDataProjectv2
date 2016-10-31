var womenManagers;
var womenInParliament;
//Call the world bank api to get the data for female employment
function femEmployment(){
	console.log('calling the function');
	
	$.ajax({
	    url: 'http://api.worldbank.org/v2/en/countries/WLD/indicators/IC.FRM.FEMM.ZS?&MRV=1&format=json',
	    type: 'GET',
	 
	   
	    failure: function(err){
	    	return alert ("Could not get the Data");

	    },
	    success: function(response) {
	    	console.log(response);
	    	 womenManagers= Math.round(response[1][0].value);
	    	console.log(womenManagers);
	    	var htmlToAppend='<div class="card-container col-sm-4 col-md-4 centered">'+
		'<div class="card">'+
			'<h2> Only</h2>'+
		    '<h1>'+womenManagers+'%</h1>'+
		    '<h2> Of companies in the world have a woman in their top management</h2>'+
	  '</div>'+
	'</div>';
	       
	     addCard(womenManagers, htmlToAppend);
	     femParliament();

	    }
	})
}


//Call the world bank api to get the data for women in parliament
function femParliament(){
	console.log('calling the function femParliament');
	
	$.ajax({
	    url: 'http://api.worldbank.org/v2/en/countries/WLD/indicators/SG.GEN.PARL.ZS?&MRV=1&format=json',
	    type: 'GET',
	 
	   
	    failure: function(err){
	    	return alert ("Could not get the Data");

	    },
	    success: function(response) {
	    	console.log(response);
	    	 womenInParliament = Math.round(response[1][0].value);
	    	console.log(womenInParliament);
	    	var htmlToAppend='<div class="card-container col-sm-4 col-md-4 centered">'+
		'<div class="card">'+
			'<h2> Only</h2>'+
		    '<h1>'+womenInParliament+'%</h1>'+
		    '<h2> Of legislatures are women</h2>'+
	  '</div>'+
	'</div>';
	       
	     addCard(womenInParliament, htmlToAppend);

	    }
	})
}

//Create the card to append to the DOM
function addCard(variabel, htmlToAppend){

	  return $('#card-holder').prepend(htmlToAppend);
}
