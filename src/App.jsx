import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";

import "./App.css";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState({});
  console.log(selected);
  return (
    <div className="app">
      <Header />
      <Sidebar selected={selected} />
      <div className="mainArea">
        <Map setSelected={setSelected} />
      </div>
    </div>
  );
}

export default App;
