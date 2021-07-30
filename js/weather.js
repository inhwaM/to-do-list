const API_KEY = "e234af9d1916a1601922d129c6a7184a"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            const temp = Math.round(((data.main.temp)-273.15)*9/5 + 32)
            weather.innerText = `${data.weather[0].main} / ${temp}℉`;
    });
}
function onGeoError(){
    alert("can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
