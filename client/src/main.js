import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { lviv, kyiv } from "./mock/mock";
import { getAllMarkers } from "./api/index";
import addMarker from "./utils/addMarker";
import "./style.css";

export const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: fromLonLat([kyiv.longitude, kyiv.latitude]),
    zoom: 6,
  }),
});

getAllMarkers().then((markers) =>
  markers.forEach((marker) =>
    addMarker(
      map,
      [marker.longitude, marker.latitude],
      marker.name,
      marker.description
    )
  )
);

addMarker(map, [kyiv.longitude, kyiv.latitude], kyiv.name, kyiv.description);
addMarker(map, [lviv.longitude, lviv.latitude], lviv.name, lviv.description);
