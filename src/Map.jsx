import {
  MapContainer,
  TileLayer,
  Popup,
  CircleMarker,
  GeoJSON,
} from "react-leaflet";
import { Button, Typography } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";

import borders from "./assets/plate_boundaries.geojson.json";

export const Map = ({ data, setSelected, slider }) => {
  const earthquakes = data?.features || [];
  return (
    <MapContainer
      center={[40, -20]}
      zoom={2}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://tile.openstreetmap.bzh/ca/{z}/{x}/{y}.png"
        attribution={
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://www.openstreetmap.cat" target="_blank">Breton OpenStreetMap Team</a>'
        }
      />

      <GeoJSON data={borders} pathOptions={{ color: "#0000ff" }} />

      {earthquakes.map((d, i) => (
        <CircleMarker
          key={i}
          center={[d.geometry.coordinates[1], d.geometry.coordinates[0]]}
          radius={d.properties.mag ** slider}
          pathOptions={{ color: "#ff0000" }}
        >
          <Popup>
            <div style={{ textAlign: "center" }}>
              <Typography variant="h6">{d.properties.title}</Typography>
              <Button
                variant="contained"
                size="small"
                color="success"
                onClick={() => setSelected(d)}
              >
                <Favorite />
              </Button>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
