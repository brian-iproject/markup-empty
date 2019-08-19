/*
Для подгрузки svg-спрайта на сервере
var ajax = new XMLHttpRequest();
ajax.open("GET", "images/icons.svg", true);
ajax.send();
ajax.onload = function(e) {
    var svgDiv = document.createElement("div");
    svgDiv.style.display = "none";
    svgDiv.innerHTML = ajax.responseText;
    document.body.insertBefore(svgDiv, document.body.childNodes[0]);
};*/