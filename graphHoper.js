const mapOne = L.map('map1', {
    center: [51.505, -0.09],
    zoom: 13
});


const attribs = "Map data copyright OpenStreetMap contributors, Open Database Licence";
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: attribs }).addTo(mapOne);


L.Routing.control({
    waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
    ],
    router: L.Routing.graphHopper('6366062e-1474-4a3f-84b3-79ecd794c457')
}).addTo(mapOne);