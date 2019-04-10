
//ticket logic//
function Ticket(){
    this.movie = [];
}

Ticket.prototype.addMovie = function(movieInfo){
    this.movie.push(movieInfo);
}



//movie logic//
function Movie(title, childPrice, adultPrice, seniorPrice){
    this.title = title,
    this.childPrice = childPrice,
    this.adultPrice = adultPrice,
    this.seniorPrice = seniorPrice
}

//create movies and new tickets//
var shazaam = new Movie('shazaam', 4.00 ,15.00 ,10.00);
var petSem = new Movie('Pet Sematary', 4.00, 15.00, 10.00);
var bladeR = new Movie('Blade Runner', 3.50 ,10.00, 7.50);

shazaamTicket = new Ticket();
petSemTicket = new Ticket();
bladeRTicket = new Ticket();

shazaamTicket.addMovie(shazaam);
petSemTicket.addMovie(petSem);
bladeRTicket.addMovie(bladeR);




//user Interface Logic//

Ticket.prototype.addCost = function(){
    var totalCost = 0;
    
}

$(function(){
    $('.movieTitle1').text(shazaamTicket.movie[0].title);
    $('.movieChildPrice1').text(shazaamTicket.movie[0].childPrice);
    $('.movieAdultPrice1').text(shazaamTicket.movie[0].adultPrice);
    $('.movieSeniorPrice1').text(shazaamTicket.movie[0].seniorPrice);

    $('.movieTitle2').text(petSemTicket.movie[0].title);
    $('.movieChildPrice2').text(petSemTicket.movie[0].childPrice);
    $('.movieAdultPrice2').text(petSemTicket.movie[0].adultPrice);
    $('.movieSeniorPrice2').text(petSemTicket.movie[0].seniorPrice);

    $('.movieTitle3').text(bladeRTicket.movie[0].title);
    $('.movieChildPrice3').text(bladeRTicket.movie[0].childPrice);
    $('.movieAdultPrice3').text(bladeRTicket.movie[0].adultPrice);
    $('.movieSeniorPrice3').text(bladeRTicket.movie[0].seniorPrice);
})


