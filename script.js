import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import 'mapbox-gl/dist/mapbox-gl.css';

document.addEventListener('DOMContentLoaded', () => {
    mapboxgl.accessToken = '';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-98.4936, 29.4241], // starting position [lng, lat] (San Antonio, TX)
        zoom: 12, // starting zoom
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl());

    // Optionally, add a marker to the map
    new mapboxgl.Marker()
        .setLngLat([-98.4936, 29.4241])
        .addTo(map);
});
