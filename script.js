const daysEl    = document.getElementById('days');

const hoursEl   = document.getElementById('hours');

const minsEl    = document.getElementById('mins');

const secondsEl = document.getElementById('secs');

//Create a function that allows the user to input and update the time or to see their graudation

// Create cool promet messages below timer and maybe add a lofi-hip player.


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

    //maybe add Month
    
    daysEl.innerHTML = days;

    hoursEl.innerHTML = formatTime(hours);

    minsEl.innerHTML = formatTime(minutes);

    secondsEl.innerHTML = formatTime(seconds);


}

// add 0 for seconds
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//TODO: Add end of countdown functionlity.

// function endOfCountDown(time) {



// }


//inital call
countdown();

// call count dopwn function every second.
setInterval(countdown, 1000);