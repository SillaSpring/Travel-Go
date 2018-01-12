
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

$(document).ready(function(){
	
	var url=
		"http://apis.data.go.kr/1262000/CountryBasicService/getCountryBasicList?ServiceKey=I%2F%2BYWCn598KJQ0%2F2r%2FWSF%2FXMSxlm92c4hgy6qm8Z2A2uFZfg8NGc6yqAwMQSji5I4sVULlXPh8essdV9a7HKSA%3D%3D&numOfRows=197";
	

    $.ajax({
         type: "GET",             
         url: url,
         dataType: "xml",
         success: onSuccess
         
       });
		
    function onSuccess(data){ 
    	
    	
    	
	  	   $(data).find("item").each(function () {
	  		 
		  	 var url ="";
		  	      url = url + "submain.html?";
		  	      url = url + "countryName=" + $(this).find("countryName").text();
				  				
	  		   		
		  		 $("#countryList").append("<li class='collection-item valign-wrapper' style='padding:0px 10px '><a class='valign-wrapper black-text' href='"+url+"' id= 'li' rel='external' style='width:200px; font-size:20px; margin-top:10px; margin-bottom:10px' ><img src='"+$(this).find("imgUrl").text()+"' style='width:40px;'><span style='margin-left:20px'>" + $(this).find("countryName").text()+"</span></a></li>");
			  	     
				
	  		   
	  	   });
	  	  
    	}
// 	<li data-icon='false'><a href='#'><img src="/img/korea.png"  class="ui-li-icon">대한민국</a></li>
// 	<li data-icon="false"><a href="#"><img src="/img/korea.png"  class="ui-li-icon">USA</a></li>
// 	<li data-icon="false"><a href="#"><img src="/img/korea.png"  class="ui-li-icon">트로피카나</a></li>

    
});