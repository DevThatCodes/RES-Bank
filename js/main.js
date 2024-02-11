const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    document.getElementById("display").innerHTML = this.responseText;
}
xhttp.open("GET", "money.json", true);
xhttp.send();