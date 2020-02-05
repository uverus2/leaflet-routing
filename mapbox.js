const mapTwo = L.map('map3', {
    center: [51.505, -0.09],
    zoom: 13
});


const attribs2 = "Map data copyright OpenStreetMap contributors, Open Database Licence";
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: attribs2 }).addTo(mapTwo);


const boxControl = L.Routing.control({
    waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
    ],
    collapsible: true,
    show: false,
    showAlternatives: true,
    lineOptions: {
        styles: [{ color: 'red', opacity: 1, weight: 5 }]
    },
    altLineOptions: {
        styles: [{ color: 'blue', opacity: 0.5, weight: 3 }]
    },
    router: L.Routing.mapbox('pk.eyJ1IjoidXZlcnVzIiwiYSI6ImNrNjd6ZHY5cDF2cGEzdHF3YmZqbDF6MnQifQ.NzYmc-5WtvMaYJUL_wFsNQ')
}).addTo(mapTwo);

boxControl.on("routesfound", e => {
    const routes = e.routes;
    const summary = routes[0].summary;
    console.log(summary)
});