mapboxgl.accessToken =
  "pk.eyJ1Ijoic29tc3ViaHJhMSIsImEiOiJja2hkbDhuNGcwNnZnMnNuMGkwcjU3d3UwIn0.ZAeP5aPO4JkxNGD7dIEZtw";

const successLocation = (position) => {
  //   console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
};

const errorLocation = () => {
  setupMap([-2.24, 53.48]);
};

const setupMap = (center) => {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    zoom: 16,
    center,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
};

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});
