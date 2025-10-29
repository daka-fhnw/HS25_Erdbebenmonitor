import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";
import { useState } from "react";

import "./App.css";
import "leaflet/dist/leaflet.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [selected, setSelected] = useState({});
  const [slider, setSlider] = useState(1);
  console.log(selected);
  return (
    <div className="app">
      <Header />
      <Sidebar
        selected={selected}
        setSelected={setSelected}
        slider={slider}
        setSlider={setSlider}
      />
      <div className="mainArea">
        <Map setSelected={setSelected} slider={slider} />
      </div>
    </div>
  );
}

export default App;
