const COORDS = 'coords';
const API_KEY = '241051bf13976dd3ddf8b8d9f247255e';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const coordsObj = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    }
    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log('get position fail.');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoors() {
    const loadedCoors = localStorage.getItem(COORDS);
    if (loadedCoors === null) {
        askForCoords();
    } else {
        // getCoors();
    }
}

function init() {
    loadCoors();
}

init();