import {
  MapContainer,
  TileLayer,
  Popup,
  CircleMarker,
  GeoJSON,
} from "react-leaflet";

import data from "./assets/4.5_week.geojson.json";
import borders from "./assets/plate_boundaries.geojson.json";

console.log(data.features);
console.log(borders);

export const Map = ({ setSelected }) => {
  const earthquakes = data.features; // Wir benötigen nur den Feature-Array aus den Daten

  return (
    <MapContainer
      center={[40, -20]}
      zoom={2}
      style={{ height: "95vh", width: "100%" }}
    >
      <TileLayer
        url="https://tile.openstreetmap.bzh/ca/{z}/{x}/{y}.png"
        attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors, Tiles courtesy of <a href=\"https://www.openstreetmap.cat\" target=\"_blank\">Breton OpenStreetMap Team</a>'
      />

      <GeoJSON data={borders} pathOptions={{ color: "#0000ff" }} />

      {earthquakes.map((d, i) => (
        <CircleMarker
          key={i}
          center={[d.geometry.coordinates[1], d.geometry.coordinates[0]]}
          radius={d.properties.mag ** 2}
          pathOptions={{ color: "#ff0000" }}
        >
          <Popup>
            <div style={{ textAlign: "center" }}>
              {d.properties.title} <br />
              <button onClick={() => setSelected(d)}>Auswählen</button>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
