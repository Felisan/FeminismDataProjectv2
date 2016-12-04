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
			'<h2>Only</h2>'+
		    '<h1>'+womenManagers+'%</h1>'+
		    '<h2> Of companies in the world have a woman in their top management</h2>'+
		    '<a href="http://datatopics.worldbank.org/gender/indicators" target="_blank"><h3>Source: World Bank Data</h3></a>'+
		    '<a href="https://twitter.com/share" class="twitter-share-button" data-text="Only '+womenManagers+ '% of companies in the world have a woman in their top management" data-via="@worldbankdata" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'+


	  '</div>'+
	'</div>';
	       
	     addCard(womenManagers, htmlToAppend);
	     

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
		    '<h2> of seats in national partliaments are held by women</h2>'+ '<h2> of ministerial positions are held by women</h2>'+
		    '<a href="http://datatopics.worldbank.org/gender/indicators" target="_blank"><h3>Source: World Bank Data</h3></a>'+
		    '<a href="https://twitter.com/share" class="twitter-share-button" data-text="Only '+womenInParliament+ '% of seats in national partliaments are held by women" data-via="@worldbankdata" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'+

	  '</div>'+
	'</div>';
	       
	     addCard(womenInParliament, htmlToAppend);

	    }
	})
}

//Call the world bank api to get the data for women in ministerial positions
function femMinistries(){
	console.log('calling the function femMinistries');
	
	$.ajax({
	    url: 'http://api.worldbank.org/v2/en/countries/WLD/indicators/SG.GEN.MNST.ZS?&MRV=1&format=json',
	    type: 'GET',
	 
	   
	    failure: function(err){
	    	return alert ("Could not get the Data");

	    },
	    success: function(response) {
	    	console.log(response);
	    	 womenInMinistries = Math.round(response[1][0].value);
	    	console.log(womenInParliament);
	    	var htmlToAppend='<div class="card-container col-sm-4 col-md-4 centered">'+
		'<div class="card">'+
			'<h2> Only</h2>'+
		    '<h1>'+womenInMinistries+'%</h1>'+
		    '<h2> of ministerial positions are held by women</h2>'+'<a href="http://datatopics.worldbank.org/gender/indicators" target="_blank"><h3>Source: World Bank Data</h3></a>'+
		    '<a href="https://twitter.com/share" class="twitter-share-button" data-text="Only '+womenInMinistries+ '% of ministerial positions in governments are held by women" data-via="@worldbankdata" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'+

	  '</div>'+
	'</div>';
	       
	     addCard(womenInMinistries, htmlToAppend);

	    }
	})
}

//Call the world bank api to get the data for girls not in elementary school 
function femGirlsSchool(){
	
	
	$.ajax({
	    url: 'http://api.worldbank.org/v2/en/countries/WLD/indicators/SE.PRM.UNER.FE?&MRV=1&format=json',
	    type: 'GET',
	 
	   
	    failure: function(err){
	    	return alert ("Could not get the Data");

	    },
	    success: function(response) {
	    	console.log(response);
	    	 girlsInSchool = Math.round((response[1][0].value)/1000000);
	    	console.log(womenInParliament);
	    	var htmlToAppend='<div class="card-container col-sm-4 col-md-4 centered">'+
		'<div class="card">'+
			'<h2>About</h2>'+
		    '<h1>'+girlsInSchool+' Million</h1>'+
		    '<h2> Girls are not going to elementary school</h2>'+
		    '<a href="http://datatopics.worldbank.org/gender/indicators" target="_blank"><h3>Source: World Bank Data</h3></a>'+
		    '<a href="https://twitter.com/share" class="twitter-share-button" data-text="'+girlsInSchool+ ' million girls are not going to elementary school" data-via="@worldbankdata" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'+

	  '</div>'+
	'</div>';
	       
	     addCard(girlsInSchool, htmlToAppend);

	    }
	})
}

//Firms with female participation in ownership (%of firms) 
function femOwners(){
	
	
	$.ajax({
	    url: 'http://api.worldbank.org/v2/en/countries/WLD/indicators/IC.FRM.FEMO.ZS?&MRV=1&format=json',
	    type: 'GET',
	 
	   
	    failure: function(err){
	    	return alert ("Could not get the Data");

	    },
	    success: function(response) {
	    	console.log(response);
	    	 womenOwners = Math.round(response[1][0].value);
	    	console.log(womenOwners);
	    	var htmlToAppend='<div class="card-container col-sm-4 col-md-4 centered">'+
		'<div class="card">'+
			'<h2>Only</h2>'+
		    '<h1>'+womenOwners+'%</h1>'+
		    '<h2> of companies in the world are owned by women</h2>'+
		    '<a href="http://datatopics.worldbank.org/gender/indicators" target="_blank"><h3>Source: World Bank Data</h3></a>'+
		    '<a href="https://twitter.com/share" class="twitter-share-button" data-text="Only '+womenOwners+ '% of companies in the world are owned by women" data-via="@worldbankdata" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'+

	  '</div>'+
	  
	'</div>';
	       
	     addCard(womenOwners, htmlToAppend);

	    }
	})
}



//Countries with legislation againsts child or early marriage 
function femEarlyMarriage(){
	
	
	$.ajax({
	    url: 'https://sheets.googleapis.com/v4/spreadsheets/1xY7elAOUiwUk4_-hQeAAEyIrjjGEs9m4YwN8y4Hvoq4/values/childmarriage!B223?key=AIzaSyBPUCBgHVylsVn7WQB9yvJmqEMoy5b17jc',
	    type: 'GET',
	 
	   
	    failure: function(err){
	    	return alert ("Could not get the Data");

	    },
	    success: function(response) {
	    	console.log(response);
	    	var lawsNoM= response.values[0];
	    	 
	    	var htmlToAppend='<div class="card-container col-sm-4 col-md-4 centered">'+
		'<div class="card">'+
			'<h2>At Least</h2>'+
		    '<h1>'+lawsNoM+' </h1>'+
		    '<h2>Countries still have no legislation against child marriage</h2>'+
		    '<a href="http://datatopics.worldbank.org/gender/indicators" target="_blank"><h3>Source: World Bank Data</h3></a>'+
		    '<a href="https://twitter.com/share" class="twitter-share-button" data-text="At least '+lawsNoM+ ' countries have no legislation againsts child marriage" data-via="@worldbankdata" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'+

	  '</div>'+
	'</div>';
	       
	     addCard(lawsNo, htmlToAppend);

	    }
	})
}
//Average hours spent on domestic work
function femDomWork(){
	
	
	$.ajax({
	    url: 'https://sheets.googleapis.com/v4/spreadsheets/1xY7elAOUiwUk4_-hQeAAEyIrjjGEs9m4YwN8y4Hvoq4/values/domesticwork!A319:E319?key=AIzaSyBPUCBgHVylsVn7WQB9yvJmqEMoy5b17jc',
	    type: 'GET',
	 
	   
	    failure: function(err){
	    	return alert ("Could not get the Data");

	    },
	    success: function(response) {
	    	console.log(response);
	    	var womenAverage= response.values[0][2];
	    	var menAverage= response.values[0][4];
	    	 
	    	var htmlToAppend='<div class="card-container col-sm-4 col-md-4 centered">'+
		'<div class="card">'+
			'<h2>Women spend on average </h2>'+
		    '<h1>'+womenAverage+' hours</h1>'+
		    '<h2>On un paid domestic work</h2>'+
		    '<h2>While men only spend</h2>'+
		    '<h1>'+menAverage+' hours</h1>'+
		    '<a href="http://datatopics.worldbank.org/gender/indicators" target="_blank"><h3>Source: World Bank Data</h3></a>'+
		    '<a href="https://twitter.com/share" class="twitter-share-button" data-text="Women spend '+womenAverage+ ' hours on domestic work, while men only spend '+menAverage+'" data-via="@worldbankdata" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'+

	  '</div>'+
	'</div>';
	       
	     addCard(womenAverage, htmlToAppend);

	    }
	})
}

//Countries with legislation againsts domestic violence
function femDomViolence(){
	
	
	$.ajax({
	    url: 'https://sheets.googleapis.com/v4/spreadsheets/1xY7elAOUiwUk4_-hQeAAEyIrjjGEs9m4YwN8y4Hvoq4/values/domesticviolence!B234?key=AIzaSyBPUCBgHVylsVn7WQB9yvJmqEMoy5b17jc',
	    type: 'GET',
	 
	   
	    failure: function(err){
	    	return alert ("Could not get the Data");

	    },
	    success: function(response) {
	    	console.log(response);
	    	var lawsNo= response.values[0];
	    	 
	    	var htmlToAppend='<div class="card-container col-sm-4 col-md-4 centered">'+
		'<div class="card">'+
			'<h2>At Least</h2>'+
		    '<h1>'+lawsNo+' </h1>'+
		    '<h2>Countries still have no legislation againsts domestic violence</h2>'+
		    '<a href="http://datatopics.worldbank.org/gender/indicators" target="_blank"><h3>Source: World Bank Data</h3></a>'+
		    '<a href="https://twitter.com/share" class="twitter-share-button" data-text="At least '+lawsNo+ ' countries have no legislation againsts domestic violence" data-via="@worldbankdata" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'+

	  '</div>'+

	'</div>';
	       
	     addCard(lawsNo, htmlToAppend);

	    }
	})
}

//Countries with Gender parity index for terciary education below 1
function femTercEduc(){
	
	
	$.ajax({
	    url: 'https://sheets.googleapis.com/v4/spreadsheets/1xY7elAOUiwUk4_-hQeAAEyIrjjGEs9m4YwN8y4Hvoq4/values/genderparityterciary!B191?key=AIzaSyBPUCBgHVylsVn7WQB9yvJmqEMoy5b17jc',
	    type: 'GET',
	 
	   
	    failure: function(err){
	    	return alert ("Could not get the Data");

	    },
	    success: function(response) {
	    	console.log("no parity "+response);
	    	var noParity= response.values[0];
	    	 
	    	var htmlToAppend='<a href="https://genderstats.un.org/#/indicators" target="_blank"><div class="card-container col-sm-4 col-md-4 centered">'+
		'<div class="card">'+
			'<h2>In at Least</h2>'+
		    '<h1>'+noParity+' </h1>'+
		    '<h2>countries university students are still mostly men</h2>'+
		    '<h3>Source: UN Data</h3>'+
		    '<a href="https://twitter.com/share" class="twitter-share-button" data-text="In at least '+noParity+ ' countries university students are still mostly men" data-via="@undata" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'+

	  '</div>'+
	'</div>';
	       
	     addCard(noParity, htmlToAppend);

	    }
	})
}
//Proportion of females amongs tertiary education teachers and professors
function femProf(){
	
	
	$.ajax({
	    url: 'https://sheets.googleapis.com/v4/spreadsheets/1xY7elAOUiwUk4_-hQeAAEyIrjjGEs9m4YwN8y4Hvoq4/values/womenProfessors!B193?key=AIzaSyBPUCBgHVylsVn7WQB9yvJmqEMoy5b17jc',
	    type: 'GET',
	 
	   
	    failure: function(err){
	    	return alert ("Could not get the Data");

	    },
	    success: function(response) {
	    	
	    	var womenProf= response.values[0];
	    	 
	    	var htmlToAppend='<a href="https://genderstats.un.org/#/indicators" target="_blank"><div class="card-container col-sm-4 col-md-4 centered">'+
		'<div class="card">'+
			'<h2>Worldwide, only</h2>'+
		    '<h1>'+womenProf+'% </h1>'+
		    '<h2>of professors in higher education are women</h2>'+
		    '<h3>Source: UN Data</h3>'+
		    '<a href="https://twitter.com/share" class="twitter-share-button" data-text="Only '+womenProf+ '% of professors in higher education are women" data-via="@undata" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'+

	 
	  '</div>'+
	'</div>';
	       
	     addCard(womenProf, htmlToAppend);

	    }
	})
}

//Share of female police officers
function femPolice(){
	
	
	$.ajax({
	    url: 'https://sheets.googleapis.com/v4/spreadsheets/1xY7elAOUiwUk4_-hQeAAEyIrjjGEs9m4YwN8y4Hvoq4/values/womenpolice!B101?key=AIzaSyBPUCBgHVylsVn7WQB9yvJmqEMoy5b17jc',
	    type: 'GET',
	 
	   
	    failure: function(err){
	    	return alert ("Could not get the Data");

	    },
	    success: function(response) {
	    	
	    	var womenPolice= response.values[0];
	    	 
	    	var htmlToAppend='<a href="https://genderstats.un.org/#/indicators" target="_blank"><div class="card-container col-sm-4 col-md-4 centered">'+
		'<div class="card">'+
			'<h2>Worldwide, only</h2>'+
		    '<h1>'+womenPolice+'% </h1>'+
		    '<h2>of police officers are women</h2>'+
		    '<h3>Source: UN Data</h3>'+
		    '<a href="https://twitter.com/share" class="twitter-share-button" data-text="Only '+womenPolice+ '% of police officers are women" data-via="@undata" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'+

	  '</div>'+
	'</div>';
	       
	     addCard(womenPolice, htmlToAppend);

	    }
	})
}
// Proportion of ever-partnered women (aged 15-49) subjected to physical and/or sexual violence by a current or former intimate partner in the last 12 months
function femPartnerViolence(){
	
	
	$.ajax({
	    url: 'https://sheets.googleapis.com/v4/spreadsheets/1xY7elAOUiwUk4_-hQeAAEyIrjjGEs9m4YwN8y4Hvoq4/values/partnerviolence!B83?key=AIzaSyBPUCBgHVylsVn7WQB9yvJmqEMoy5b17jc',
	    type: 'GET',
	 
	   
	    failure: function(err){
	    	return alert ("Could not get the Data");

	    },
	    success: function(response) {
	    	
	    	var partnerViolence= response.values[0];
	    	 
	    	var htmlToAppend='<a href="https://genderstats.un.org/#/indicators" target="_blank"><div class="card-container col-sm-4 col-md-4 centered">'+
		'<div class="card">'+
			'<h2>Worldwide</h2>'+
		    '<h1>'+partnerViolence+'% </h1>'+
		    '<h2>of women admitted to have been subjected to physical and or sexual violence by a partner, in the last 12 months</h2>'+
		    '<h3>Source: UN Data</h3>'+
		    '<a href="https://twitter.com/share" class="twitter-share-button" data-text="'+ partnerViolence+ '% of women have been subjected to physical or sexual violence by a partner" data-via="@undata" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'+
	  '</div>'+
	'</div>';
	       
	     addCard(partnerViolence, htmlToAppend);

	    }
	})
}
// share of female judges
function femJudges(){
	
	
	$.ajax({
	    url: 'https://sheets.googleapis.com/v4/spreadsheets/1xY7elAOUiwUk4_-hQeAAEyIrjjGEs9m4YwN8y4Hvoq4/values/femjudges!B90?key=AIzaSyBPUCBgHVylsVn7WQB9yvJmqEMoy5b17jc',
	    type: 'GET',
	 
	   
	    failure: function(err){
	    	return alert ("Could not get the Data");

	    },
	    success: function(response) {
	    	
	    	var femjudges= response.values[0];
	    	 
	    	var htmlToAppend='<a href="https://genderstats.un.org/#/indicators" target="_blank"><div class="card-container col-sm-4 col-md-4 centered">'+
		'<div class="card">'+
			'<h2>Only</h2>'+
		    '<h1>'+femjudges+'% </h1>'+
		    '<h2>of judges in the world are women</h2>'+
		    '<h3>Source: UN Data</h3>'+
		    '<a href="https://twitter.com/share" class="twitter-share-button" data-text="Only '+ femjudges+ ' of judges are women" data-via="@undata" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'+
	  '</div>'+
	'</div></a>';
	       
	     addCard(femjudges, htmlToAppend);

	    }
	})
}


//Create the card to append to the DOM
function addCard(variabel, htmlToAppend){

	  return $('#card-holder').prepend(htmlToAppend);
}
//function to clear everything before adding new data
function deleteCards(){
	document.getElementById("card-holder").innerHTML = " ";
	
}
