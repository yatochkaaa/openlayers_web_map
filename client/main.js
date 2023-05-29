import "./style.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Marker from "ol-marker-feature";
import Popup from "ol-popup";
import { fromLonLat } from "ol/proj";

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: fromLonLat([30.523457, 50.445331]),
    zoom: 4,
  }),
});

const createMarker = (coords, title, description) => {
  const marker = new Marker(fromLonLat(coords));
  marker.set(title, description);
  marker.setMap(map)

  const popup = new Popup({ offset: [0, -32] });
  map.addOverlay(popup);

  marker.on('click', function() {
    popup.show(marker.getLocation(), marker.get(title));
  });
}

createMarker([30.523457, 50.445331], "Киев", "Здесь Киев.");
createMarker([24.091518, 49.808935], "Львов", "Здесь Львов.");
