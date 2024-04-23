// const xmlhttp = new XMLHttpRequest();
// xmlhttp.onload = function() {
//   const myObj = JSON.parse(this.responseText);


  
// };
// xmlhttp.open("GET", "../data.json");

fetch('../js/data.json')
  .then(response => response.json())
  .then(data => {
    const datesArray = JSON.stringify(data);
    console.log(datesArray);

    
});