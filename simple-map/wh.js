//Initialize the Map
var map = L.map("map", {
    center: L.latLng(38.8977, -77.0365),
    zoom: 16,
    minZoom: 10,
    maxZoom: 20
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> By Charlie Zhang'
}).addTo(map);

L.marker([38.8977, -77.0365],
    {alt: 'WhiteHouse'}).addTo(map)
    .bindPopup('White House')
    .openPopup();