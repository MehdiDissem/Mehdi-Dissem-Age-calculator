var days = 0
var months = 0
var years = 0



$(document).ready(function(){
    $("#refresh").click(function(){
        location.reload();
    });
});

$(document).ready(function(){
    $("#submit").one(('click'),function(){
        days = $("#days").val()*1;
        months = $('#months').val()*1;
        years = $('#years').val()*1;
        if(days === 0 && months === 0 && years === 0){
            alert("Please enter your age")
        } else {
        $('#values').show()
        $('#funny').show()
        $('#ShowSeconds').append($('<p>  Your age in seconds:' + (days * 86400) + (months * 2629800) + ((2022-years) * 31556952) +' </p>'))
        $('#ShowHours').append($('<p>  Your age in hours:' + (days * 24) + (months * 730) + ((2022-years) * 8760) +' </p>'))
        $('#ShowDays').append($('<p>  Your age in days:' + days + (months*30) + ((2022-years) * 365) +' </p>'))
}});
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
        $('#astralbutton').show()
        if (years<=1970){
            $('#funnyString').append($('<img src="./audio/Senior-and-Elderly-Care-Living-Options.jpg" />'))
            sixties.play()
        } else if(years>=1970 && years < 1980) {
            $('#funnyString').append($('<img src="./audio/301188510_604448421253931_7254729993401602922_n.jpg" />'))
            seventies.play()
        }else if(years >=1980 && years <1990){
            $('#funnyString').append('<img src="http://star98radio.com/wp-content/uploads/2014/06/Michael-Jackson-Gif-michael-jackson-29034073-500-327.gif" />')
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

function zodiac(days, months){
    var Asign=""
    if (months == 12){    
        if (days < 22){
            Asign = "Sagittarius"
    }else{
        Asign ="Capricorn"
    }}    
    else if (months === 01){
        if (days < 20){
            Asign = 'Capricorn'
        }else{
            Asign = 'Aquarius'
    }}
    else if (months === 02){
        if (days < 19){
        Asign = 'Aquarius'
    }else{
        Asign = 'Pisces'
    }}  
    else if(months === 03){
        if (days < 21){
        Asign = 'Pisces'
    }else{
        Asign = 'Aries'
    }}
    else if (months === 04){
        if (days < 20){
        Asign = 'Aries'
    }else{
        Asign = 'Taurus'
    }}
    else if (months === 05){
        if (days < 21){
        Asign = 'Taurus'
    }else{
        Asign = 'Gemini'
    }}
    else if( months === 06){
        if (days < 21){
        Asign = 'Gemini'
    }else{
        Asign = 'Cancer'
    }}
    else if (months === 07){
        if (days < 23){
            Asign = 'Cancer'
        }else{
            Asign = 'Leo'
    }}
    else if( months === 08){
        if (days < 23){
            Asign = 'Leo'
        }else{
            Asign = 'Virgo'
    }}  
    else if (months === 09){
        if (days < 23){
        Asign = 'Virgo'
    }else{
        Asign = 'Libra'
    }}
    else if (months === 10){
        if (days < 23){
        Asign = 'Libra'
    }else{
        Asign = 'Scorpio'
    }}
    else if (months === 11){
        if (days < 22){
        Asign = 'Scorpio'
    }else{
        Asign = 'Sagittarius'
    }}
    return Asign
}



$(document).ready(function(){
    $('#astralbutton').one(('click'),function(){
        $('#values').hide()
        $('#funny').hide()
        zodiac(days,months)
        var sign=zodiac(days,months)
        console.log(sign)
        if (sign === 'Sagittarius'){
            $('#astralName').append('<h1>Sagittarius</h1>')
            $('#pictureSign').append('<img src="https://popularvedicscience.com/wp-content/uploads/2022/04/sagittarius-article-300x169.jpeg" />')
            $('#descriptionSign').append("<p> What makes Sagittarius so unique is its dynamic blend of passion, curiosity, intensity, and adaptability. Represented by the archer (a half-man, half-horse centaur), Sagittarius isn't afraid to use its bow and arrow to explore expansive terrain, seeking answers in places and spaces others wouldn't dare venture. </p>")
        } else if (sign ==='Capricorn'){
            $('#astralName').append('<h1>Capricorn</h1>')
            $('#pictureSign').append('<img src="https://popularvedicscience.com/wp-content/uploads/2022/04/capricorn-article-300x169.jpeg" />')
            $('#descriptionSign').append("<p>The last earth sign of the zodiac, Capricorns and their unique spirits are powerful, to say the least. </p>")
        } else if( sign === 'Aquarius'){
            $('#astralName').append('<h1>Aquarius</h1>')
            $('#pictureSign').append('<img src="https://popularvedicscience.com/wp-content/uploads/2022/04/aquarius-article-300x169.jpeg" />')
            $('#descriptionSign').append("<p>Aquarius’s symbol is the water bearer, which many believe represents the gifts of truth and pure intentions that they bring to the world. Aquarians are very upfront people, and they don’t do shenanigans or shady business. </p>")
        } else if(sign ==='Pisces'){
            $('#astralName').append('<h1>Pisces</h1>')
            $('#pictureSign').append('<img src="https://popularvedicscience.com/wp-content/uploads/2022/04/pisces-article-300x169.jpeg" />')
            $('#descriptionSign').append("<p>Typical sun in Pisces traits include being compassionate, romantic, artistic, intensely empathic, and sensitive. They're the obvious creatives of the zodiac; when they channel their emotions into their favorite art form, they feel more centered and enlightened.</p>")
        }else if(sign === 'Taurus'){
            $('#astralName').append('<h1>Taurus</h1>')
            $('#pictureSign').append('<img src="https://popularvedicscience.com/wp-content/uploads/2022/04/taurus-article-300x169.jpeg" />')
            $('#descriptionSign').append("<p>Since Taurus is ruled by the planet of love herself, Taureans are very interested in merging completely with a partner. They need to feel loved, comforted, and, above all, stable in a relationship. They're not ones for drama. Translation: This is a sign that mates for life.</p>")
        } else if(sign ==='Gemini'){
            $('#astralName').append('<h1>Gemini</h1>')
            $('#pictureSign').append('<img src="https://popularvedicscience.com/wp-content/uploads/2022/04/gemini-article-300x169.jpeg" />')
            $('#descriptionSign').append("<p>Persons born under the sign of the twins possess a quick wit and a passion for learning. Influenced by mercury, you Gemini-natives are talented speakers and debaters. Through charm, humor, and skillful rhetoric, you can often bring others around to their point of view.</p>")
        } else if (sign === 'Cancer'){
            $('#astralName').append('<h1>Cancer</h1>')
            $('#pictureSign').append('<img src="https://popularvedicscience.com/wp-content/uploads/2022/04/cancer-article-300x169.jpeg" />')
            $('#descriptionSign').append("<p>Those born under the sign of the crab choose their words carefully, preferring to communicate through subtle means rather than in a direct or forceful manner. For this reason, you are fond of poetry and other types of creative self-expression.</p>")
        }else if (sign ==='Leo'){
            $('#astralName').append('<h1>Leo</h1>')
            $('#pictureSign').append('<img src="https://popularvedicscience.com/wp-content/uploads/2022/04/leo-article-300x169.jpeg" />')
            $('#descriptionSign').append("<p>Leo is a sign of tremendous power and bravery. Just as the lion is known as the king of the jungle, Leos stand out among their peers. They are ambitious and effective leaders, and they command the respect of those who follow them.</p>")
        }else if (sign ==='Virgo'){
            $('#astralName').append('<h1>Virgo</h1>')
            $('#pictureSign').append('<img src="https://popularvedicscience.com/wp-content/uploads/2022/05/virgo-article-300x169.jpg" />')
            $('#descriptionSign').append("<p>Symbolized by the Virgin, or young unmarried girl, Virgos are smart and sensible. They have a knack for problem-solving and are very practical. They are dutiful and dependable, and always keep their word. They understand that the long-term consequences of dishonesty outweigh its short-term benefits.</p>")
        }else if (sign ==='Libra'){
            $('#astralName').append('<h1>Libra</h1>')
            $('#pictureSign').append('<img src="https://popularvedicscience.com/wp-content/uploads/2022/04/libra-article-300x169.jpeg" />')
            $('#descriptionSign').append("<p>As a Venetian sign, Librans are thoughtful and far-sighted individuals. They can earn a reputation for their intellect and vast learning in different subjects. You have a balanced approach to life. You have good taste in food, decor, fashion, and friends. You are artistic and charming, and others consider you to be a very friendly person.</p>")
        }else if (sign === 'Scorpio'){
            $('#astralName').append('<h1>Scorpio</h1>')
            $('#pictureSign').append('<img src="https://popularvedicscience.com/wp-content/uploads/2022/04/scorpio-article-300x169.jpeg" />')
            $('#descriptionSign').append("<p>As a Martian sign, Scorpios are natural fighters. They are composed and calm on the exterior, but within they are bursting with energy and power. At a moment’s notice, you can spring into action. You are hard-working and you possess great inner strength.</p>")
        }
    })
})





// var vid = document.getElementById('clockVid')
// var stopvid=document.getElementById('stopvid')

// $("#stopvid").click(function(event){
//     $('clockVid').pause()
// })


