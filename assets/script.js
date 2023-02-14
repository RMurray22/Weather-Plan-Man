function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--" + newName.value + "--";

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + newName.value + '&appid=debedf3ec770a6134bafe0d07ed54e45')
        .then(response => response.json())
        .then(data => {
