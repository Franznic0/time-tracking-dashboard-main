const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

const currentTime = document.querySelectorAll('actual-time');
const previousTime = document.querySelectorAll('previous-time');
let datesArray = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];

function changeTime(){
    
    // // fetch data from json file
    // fetch('../js/data.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     // assigne json data to array
    //     datesArray = JSON.parse(JSON.stringify(data));
        
    //     console.log(datesArray[0].title);

    // });
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