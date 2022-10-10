//creating a local storage
var days = 0
var months = 0
var years = 0
$('#values').hide()
$(document).ready(function(){
    $("#submit").one(('click'),function(){
        days = $("#days").val();
        months = $('#months').val();
        years = $('#years').val();
        $('#values').show()
        $('#ShowSeconds').append($('<p>  Your age in seconds: </p>' + days * 86400 + months * 2629800 + years * 31556952 + '  '+' </p>'))
        $('#ShowHours').append($('<p>  Your age in hours: </p>' + days * 24 + months * 730 + years * 8760 + '  '+' </p>'))
        $('#ShowDays').append($('<p>  Your age in days: </p>' + days + months * 30 + (years) * 365 + '  '+' </p>'))
    });
});
