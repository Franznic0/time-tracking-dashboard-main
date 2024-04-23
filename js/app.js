const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

const currentTime = document.querySelectorAll('actual-time');
const previousTime = document.querySelectorAll('previous-time');
let datesArray = "";

function changeTime(){
    
    // fetch data from json file
    fetch('../js/data.json')
      .then(response => response.json())
      .then(data => {
        // assigne json data to array
        datesArray = JSON.parse(JSON.stringify(data));
        
        console.log(datesArray[0].title);

    });
    // set daily time
    if (daily.checked) {
        for(let i=0; i<currentTime.length; i++) {
            currentTime[i].textContent = `${datesArray[0][i].timeframes.daily.current}hrs`;
            previousTime[i].textContent = `Last Day - ${datesArray[0][i].timeframes.daily.previous}hrs`;
        }
    };
};

daily.addEventListener('click', changeTime());
// changeTime();