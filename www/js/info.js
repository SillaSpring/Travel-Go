
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
	
	var temp = location.href.split("?");
	var temp = temp[1].split("=");
	var t = temp[1];
	
	var proxy = 'https://cryptic-headland-94862.herokuapp.com/';
	var url="http://apis.data.go.kr/1262000/CountryBasicService/getCountryBasicList?ServiceKey=I%2F%2BYWCn598KJQ0%2F2r%2FWSF%2FXMSxlm92c4hgy6qm8Z2A2uFZfg8NGc6yqAwMQSji5I4sVULlXPh8essdV9a7HKSA%3D%3D&countryName="+t;

    $.ajax({
         type: "GET",             
         url: proxy+url,
         dataType: "xml",
         success: onSuccess
         
       });

    function onSuccess(data){ 
    	
    	
  
	  	   $(data).find("item").each(function(){
	  		   
				var text = $(this).find("basic").text();
				
				text = text.replace(/<br\/>/ig, "\n"); 
				
				text = text.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
				
				var nation = $(this).find("countryName").text();
				if(nation=="호주")
				{
					$("#submain_background").attr("src","img/Aust.jpg");
				}
				else if(nation=="태국")
				{
					$("#submain_background").attr("src","img/tailand.jpg");
				}
				else if(nation=="대만")
				{
					$("#submain_background").attr("src","img/taiwan.jpg");
				}
				else if(nation=="미국")
				{
					$("#submain_background").attr("src","img/us.jpg");
				}
				else if(nation=="이탈리아")
				{
					$("#submain_background").attr("src","img/ita.jpg");
				}
				
				
				$("#countryImg").attr("src",$(this).find("imgUrl").text());
				$("#countryName").text($(this).find("countryName").text());
				
				$("#info").attr("href","submain_info.html?countryName="+$(this).find("countryName").text());
				$("#accident").attr("href","submain_accident.html?countryName="+$(this).find("countryName").text());
				$("#news").attr("href","submain_call.html?countryName="+$(this).find("countryName").text());
				//탭버튼//
				$("#tap_food").attr("href","submain_food.html?countryName="+$(this).find("countryName").text());
				$("#tap_tour").attr("href","submain_tour.html?countryName="+$(this).find("countryName").text());
				$("#tap_activity").attr("href","submain_activity.html?countryName="+$(this).find("countryName").text());
				$("#tap_community").attr("href","submain_community.html?countryName="+$(this).find("countryName").text());
				$("#tap_call").attr("href","submain_call.html?countryName="+$(this).find("countryName").text());
				$("#tap_accident").attr("href","submain_accident.html?countryName="+$(this).find("countryName").text());
				//더보기버튼//
				$("#card_food").attr("href","submain_food.html?countryName="+$(this).find("countryName").text());
				$("#card_tour").attr("href","submain_tour.html?countryName="+$(this).find("countryName").text());
				$("#card_activity").attr("href","submain_activity.html?countryName="+$(this).find("countryName").text());
				$("#card_community").attr("href","submain_community.html?countryName="+$(this).find("countryName").text());
				
		  		 // $("#countryName").append($(this).find("countryName").text());
		  		 // $("#countryEng").append($(this).find("countryEnName").text());
		  		 // $("#countryImg").attr("src",$(this).find("imgUrl").text());
				 
				
		  	     // // url = url + "info.html?";
		  	     // // url = url + "countryName=" + $(this).find("countryName").text();
				 
				 // $("#tmi").attr("href","tmi.html?countryName="+$(this).find("countryName").text());
				 // $("#accident").attr("href","accident.html?countryName="+$(this).find("countryName").text());
				 // $("#call").attr("href","call.html?countryName="+$(this).find("countryName").text());
				 // $("#caution").attr("href","caution.html?countryName="+$(this).find("countryName").text());
				 
				 var text1 = text.substring(0,43);
				 var text2 = text.substring(43,80);
				 $("#countryInfo").html(text1+"<br>"+text2);
				
	  	   });
	  	  
    	}
	var url1="http://apis.data.go.kr/1262000/ContactService/getContactList?ServiceKey=I%2F%2BYWCn598KJQ0%2F2r%2FWSF%2FXMSxlm92c4hgy6qm8Z2A2uFZfg8NGc6yqAwMQSji5I4sVULlXPh8essdV9a7HKSA%3D%3D&countryName="+t;
	

    $.ajax({
         type: "GET",             
         url: proxy+url1,
         dataType: "xml",
         success: onSuccess1
         
       });

    function onSuccess1(data){ 
    	

	  	   $(data).find("item").each(function () {
			   
				
				var text = $(this).find("contact").text();
				temp = text.split("</h3>",2);
				text = temp[1];
				// var temp = location.href.split("?");
				// var temp = temp[1].split("=");
				// var t = temp[1];
				
			
				text = text.replace(/<br\/>/ig, "\n");
				
		
				text = text.replace(/<h3>/g, "");
				
				text = text.replace(/<\/h3>/g, "");
			
				text = text.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
				 var text1 = text.substring(0,43);
				 var text2 = text.substring(43,80);
				 $("#countryContact").html(text1+"<br>"+text2);
				
	

			   
		  		
				 

	  	   });
	  	  
    	}
	
	var url2=
		"http://apis.data.go.kr/1262000/AccidentService/getAccidentList?serviceKey=I%2F%2BYWCn598KJQ0%2F2r%2FWSF%2FXMSxlm92c4hgy6qm8Z2A2uFZfg8NGc6yqAwMQSji5I4sVULlXPh8essdV9a7HKSA%3D%3D&countryName="+t;
	

    $.ajax({
         type: "GET",             
         url: proxy+url2,
         dataType: "xml",
         success: onSuccess2
         
       });

    function onSuccess2(data){ 
    	
    	
    	
	  	   $(data).find("item").each(function () {
			   
				
				var text= $(this).find("news").text();
				temp = text.split("ㅇ");
				text = temp[1];
			
				
				
				
				
				text = text.replace(/<br\/>/ig, "\n"); 
				
				text = text.replace(/<(\/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(\/)?>/g, "");
				
				
				var text1 = text.substring(0,43);
				 var text2 = text.substring(43,80);
				 $("#countryNews").html(text1+"<br>"+text2);
				

	  	   });
	  	  
    	}

    
});