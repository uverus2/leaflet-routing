(() => {
    const createButton = (label, container) => {
        var btn = L.DomUtil.create('button', '', container);
        btn.setAttribute('type', 'button');
        btn.innerHTML = label;
        return btn;
    };

    const map = L.map('map', {
        center: [51.505, -0.09],
        zoom: 13
    });


    const attrib = "Map data copyright OpenStreetMap contributors, Open Database Licence";
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: attrib }).addTo(map);

    const control = L.Routing.control({
        waypoints: [
            L.latLng(57.74, 11.94),
            L.latLng(57.6792, 11.949)
        ],
        routeWhileDragging: true,
    }).addTo(map);



    map.on('click', e => {
        var container = L.DomUtil.create('div'),
            startBtn = createButton('Start from this location', container),
            destBtn = createButton('Go to this location', container);

        L.popup()
            .setContent(container)
            .setLatLng(e.latlng)
            .openOn(map);

        L.DomEvent.on(startBtn, 'click', function() {
            control.spliceWaypoints(0, 1, e.latlng);
            map.closePopup();
        });

        L.DomEvent.on(destBtn, 'click', function() {
            control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
            map.closePopup();
        });

    });
})();