//creating a local storage
var days = 0
var months = 0
var years = 0
$('#values').hide()
$('#funny').hide()
$('#funnyButton').hide()

$(document).ready(function(){
    $("#refresh").click(function(){
        location.reload();
    });
});

$(document).ready(function(){
    $("#submit").one(('click'),function(){
        days = $("#days").val();
        months = $('#months').val();
        years = $('#years').val();
        $('#values').show()
        $('#funny').show()
        $('#ShowSeconds').append($('<p>  Your age in seconds: </p>' + days * 86400 + months * 2629800 + years * 31556952 + '  '+' </p>'))
        $('#ShowHours').append($('<p>  Your age in hours: </p>' + days * 24 + months * 730 + years * 8760 + '  '+' </p>'))
        $('#ShowDays').append($('<p>  Your age in days: </p>' + days + months * 30 + (years) * 365 + '  '+' </p>'))
    });
});

const sixties = new Audio("./audio/Percy Faith - Theme From A Summer Place.mp3")
const seventies = new Audio("./audio/Guess Who No Sugar Tonight.mp3")
const eighties = new Audio("./audio/Beat It - Michael Jackson.mp3")
const nineties = new Audio("./audio/Nirvana - Smells Like Teen Spirit .mp3")
const twenties = new Audio("./audio/Destiny's Child - Say My Name .mp3")
const twentyten = new Audio("./audio/Kesha - TiK ToK .mp3")
const twentytwenty = new Audio("./audio/baby shark .mp3")

$(document).ready(function(){
    $('#funnyButton').one(('click'),function(){
        if (years<1970){
            $('#funnyString').append($('<p> Ooooh Hello old guy ! </p>'))
            sixties.play()
        } else if(years>=1970 && years < 1980) {
            $('<#funnyString').append($('<p>You are from the 70ties, here is a music for you!</p>'))
            seventies.play()
        }else if(years >=1980 && years <1990){
            $('<#funnyString').append('<p>MJ is the way of the 80ies</p>')
            eighties.play()
        }else if (years >=1990 && years< 2000){
            nineties.play()
            $('#funnyString').append('<img id="theImg" src="https://cdn.britannica.com/27/23027-004-633EF982/Nirvana-Kurt-Cobain-Krist-Novoselic-Dave-Grohl.jpg?s=1500x700&q=85" />')
            $('#funnyString').append("<p>Nirvana for you my 90's guy !</p>")
        }else if (years>=2000 && years<2010){
            twenties.play()
            $('#funnyString').append('<img src="https://i.pinimg.com/564x/21/e4/db/21e4db88ad6b94f08f7212a2a863dc48.jpg" />')
            $('#funnyString').append('<p>For Houssem</p>')
        }else if(years>=2010 && years<2020){
            twentyten.play()
            $('#funnyString').append('<img src="https://i.imgflip.com/472qqf.jpg" />')
        }else if(years>=2020){
            twentytwenty.play()
            $('#funnyString').append('<img src="https://i.pinimg.com/originals/f2/a6/69/f2a6691f43a9dda204e70f4c5ac4d9ca.gif" />')
        }
    })
})