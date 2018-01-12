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

$(document).ready(function() {

    var temp = location.href.split("?");
    var temp = temp[1].split("=");
    var t = temp[1];
    var proxy = 'https://cryptic-headland-94862.herokuapp.com/';
    var url =
        "http://apis.data.go.kr/1262000/AccidentService/getAccidentList?serviceKey=I%2F%2BYWCn598KJQ0%2F2r%2FWSF%2FXMSxlm92c4hgy6qm8Z2A2uFZfg8NGc6yqAwMQSji5I4sVULlXPh8essdV9a7HKSA%3D%3D&countryName=" + t;

    $.ajax({
        type: "GET",
        url: proxy + url,
        dataType: "xml",
        success: onSuccess

    });

    function onSuccess(data) {
        $(data).find("item").each(function() {

            $("#small_content02").append($(this).find("news").text());
            $("#hd").append($(this).find("name").text());
        });

    }
});