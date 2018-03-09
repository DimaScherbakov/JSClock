var secondHand = document.querySelector('.second-hand');
var minHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

function setDate() {
    var now = new Date(); // define today's date
    // define seconds
    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 90;
    // console.log('secondsDegrees : '+secondsDegrees);
    // console.log(secondsDegrees-90);
    // console.log(seconds*6);
    // secondsDegrees = seconds*6;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // define minutes
    var mins = now.getMinutes();
    var minutesDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // define hours
    var hours = now.getHours();
    var hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1);