const daysEl    = document.getElementById('days');

const hoursEl   = document.getElementById('hours');

const minsEl    = document.getElementById('mins');

const secondsEl = document.getElementById('secs');




const GradYear = "15 may 2022";

function countdown() {
    const newGradDate = new Date(GradYear);
    const currentDate = new Date();

    // Calculate Total seconds from date 
    const totalSeconds = (newGradDate - currentDate) / 1000;

    // From total seconds get day hours mins and seconds using math floor to get whole integers.
    const days = Math.floor(totalSeconds / 3600 / 24 );

    const hours = Math.floor( totalSeconds / 3600) % 24;

    const minutes = Math.floor (totalSeconds / 60)  % 60;

    const seconds = Math.floor ( totalSeconds - 5) % 60;

    
    daysEl.innerHTML = days;

    hoursEl.innerHTML = hours;

    minsEl.innerHTML = minutes;

    secondsEl.innerHTML = seconds;


}


//inital call
countdown();

// call count dopwn function every second.
setInterval(countdown, 1000);