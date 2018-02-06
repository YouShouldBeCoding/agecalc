// this just a practice with function return :)

var myAge = prompt("Please, Enter Your Age:");

function months(){
    var months = myAge * 12;
    var ageInMonths = numeral(months).format('0,0');

    return ageInMonths;
}

function weeks(){
    var weeks = myAge * 52;
    var ageInWeeks = numeral(weeks).format('0,0');

    return ageInWeeks;
}

function days(){
    var days = myAge * 365.25;
    var ageInDays = numeral(days).format('0,0.00');

    return ageInDays;
}

function hours(){
    var hours = myAge * 365.25 * 24;
    var ageInHours = numeral(hours).format('0,0.00');

    return ageInHours;
}

function minutes(){
    var minutes = myAge * 365.25 * 24 * 60;
    var ageInMinutes = numeral(minutes).format('0,0.00');

    return ageInMinutes;
}

function seconds(){
    var seconds = myAge * 365.25 * 24 * 60 * 3600;
    var ageInSeconds = numeral(seconds).format('0,0.00');

    return ageInSeconds;
}
document.write("<div class='yrs'>If You Are: " + myAge + " Years Old, Then:</div>")
document.write("<div class='mo'>Your Are: " + months() + " Months Old</div>")
document.write("<div class='wks'>Your Are: " + weeks() + " Weeks Old</div>")
document.write("<div class='days'>You Are: " + days() + " Days Old</div>")
document.write("<div class='hrs'>You Are: " + hours() + " Hours Old</div>")
document.write("<div class='min'>You Are: " + minutes() + " Minutes Old</div>")
document.write("<div class='sec'>You are: " + seconds() + " Seconds Old</div>")
document.write("<div class='final'>Wow, now " + myAge + " years old doesn't look so bad, does it!</div>")
