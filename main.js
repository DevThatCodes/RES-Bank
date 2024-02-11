const xhttp = new XMLHttpRequest();
let moneyVals = JSON.parse(xhttp.open("GET", "money.json", true));
document.getElementById("display").innerHTML = JSON.stringify(moneyVals);