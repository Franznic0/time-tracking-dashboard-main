const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  console.log(myObj.title);


  
};
xmlhttp.open("GET", "../data.json");

const timeframe = () => {
    var frameSelec = document.querySelectorAll('.timeframe');
    
    
    for (let i=0; i < frameSelec.length; i++) {
        frameSelec[i].addEventListener('click', function() {
            
            // toggle timeframe selection
            this.classList.toggle('active');

            // change to selected timeframe

        });
    };
};

timeframe();
