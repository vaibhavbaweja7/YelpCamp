


mapboxgl.accessToken = 'pk.eyJ1IjoidmFpYmhhdmJ3ajkiLCJhIjoiY2txbnM5MWFkMGNmejJubnh3MTQzbWE2bCJ9.9ltIqFn2tXu0Qqb2oyC4fA';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: campground.geometry.coordinates, // starting position [lng, lat]
zoom: 10 // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());
new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
             new mapboxgl.Popup({offset:25})
             .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`) 
             )
    .addTo(map)

    