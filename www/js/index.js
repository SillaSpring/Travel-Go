
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
		"http://apis.data.go.kr/1262000/CountrySafetyService/getCountrySafetyList?ServiceKey=I%2F%2BYWCn598KJQ0%2F2r%2FWSF%2FXMSxlm92c4hgy6qm8Z2A2uFZfg8NGc6yqAwMQSji5I4sVULlXPh8essdV9a7HKSA%3D%3D&numOfRows=5";
	

    $.ajax({
         type: "GET",             
         url: url,
         dataType: "xml",
         success: onSuccess
         
       });

    function onSuccess(data){ 
    	
	  	   $(data).find("item").each(function () {
	  		   $("#box").append("<div style='margin:3% 3% 5% 3%; border:2px solid rgba(52,89,149,0.68);  border-radius:5px;'><h4 id='country' style='color:#345995; margin:3%'>"+$(this).find("countryName").text()+"</h4>" +
	  		   						"<p id='date' style='margin:3%'>"+$(this).find("wrtDt").text()+"</p>"+
	  		   						"<p id='content' style='margin:3%; max-height : 100px; overflow: hidden; text-overflow: ellipsis;  '>"+$(this).find("content").text()+"</p></div>");
	  		   								//	  		 white-space: nowrap;  줄바꿈금지css
	  	   });
	  	  
    	}
	

    
});