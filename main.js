let moneyVals = JSON.parse();

xhttp.open("GET", "money.json", true);
document.getElementById("display").innerHTML = moneyVals;