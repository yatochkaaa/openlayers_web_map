import Marker from "ol-marker-feature";
import Popup from "ol-popup";
import { fromLonLat } from "ol/proj";

const addMarker = (map, coords, title, description) => {
  const marker = new Marker(fromLonLat(coords));
  marker.set(title, description);
  marker.setMap(map);

  const popup = new Popup({ offset: [0, -32] });
  map.addOverlay(popup);

  marker.on("click", function () {
    popup.show(
      marker.getLocation(),
      `<div><b>${title}</b><br/>${description}</div>`
    );
  });
};

export default addMarker;
