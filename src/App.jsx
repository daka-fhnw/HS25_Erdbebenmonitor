import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";
import { useEffect, useState } from "react";
import { interval_hour, magnitude_significant } from "./constants.jsx";

import "./App.css";
import "leaflet/dist/leaflet.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [selected, setSelected] = useState({});
  const [slider, setSlider] = useState(1);
  const baseUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary";
  const [data, setData] = useState({});
  const [magnitude, setMagnitude] = useState(magnitude_significant);
  const [interval, setInterval] = useState(interval_hour);
  useEffect(() => {
    fetch(`${baseUrl}/${magnitude}_${interval}.geojson`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, [magnitude, interval]);
  return (
    <div className="app">
      <Header
        magnitude={magnitude}
        setMagnitude={setMagnitude}
        interval={interval}
        setInterval={setInterval}
      />
      <Sidebar
        selected={selected}
        setSelected={setSelected}
        slider={slider}
        setSlider={setSlider}
      />
      <div className="mainArea">
        <Map data={data} setSelected={setSelected} slider={slider} />
      </div>
    </div>
  );
}

export default App;
