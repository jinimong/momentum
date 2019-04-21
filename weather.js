const weather = document.querySelector('.js-weather');

const COORDS = 'coords';
const API_KEY = '241051bf13976dd3ddf8b8d9f247255e';

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${place} @ ${temperature}°C`;
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const coordsObj = {
        lat,
        lng
    }
    saveCoords(coordsObj);
    getWeather(lat, lng);
}

function handleGeoError() {
    console.log('get position fail.');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoors() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.lat, parseCoords.lng);
    }
}

function init() {
    loadCoors();
}

init();