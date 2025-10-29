function formatTimestamp(time) {
  return time ? new Date(time).toLocaleString() : "";
}

export const Sidebar = ({ selected }) => (
  <div className="aside">
    <aside>
      <p>Stärke: {selected?.properties?.mag ?? ""}</p>
      <p>
        Zeitpunkt: <br />
        {formatTimestamp(selected?.properties?.time)}
      </p>
      <p>
        Lage:
        <br /> {selected?.properties?.place}
      </p>
      <p>
        Epizentrum: <br />
        Lat: {selected?.geometry?.coordinates[1] ?? ""}
        <br />
        Lon: {selected?.geometry?.coordinates[0] ?? ""}
      </p>
    </aside>
  </div>
);
