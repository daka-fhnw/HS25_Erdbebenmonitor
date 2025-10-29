import {
  Button,
  Card,
  CardActions,
  CardContent,
  Slider,
  Typography,
} from "@mui/material";
import HeartBroken from "@mui/icons-material/HeartBroken";

function formatTimestamp(time) {
  return time ? new Date(time).toLocaleString() : "";
}

export const Sidebar = ({ selected, setSelected, slider, setSlider }) => (
  <div className="aside">
    <aside>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5">Auswahl</Typography>
          <Typography variant="h6">Stärke</Typography>
          <Typography variant="body1">
            {selected?.properties?.mag ?? ""}
          </Typography>
          <Typography variant="h6">Zeitpunkt</Typography>
          <Typography variant="body1">
            {formatTimestamp(selected?.properties?.time)}
          </Typography>
          <Typography variant="h6">Lage</Typography>
          <Typography variant="body1">{selected?.properties?.place}</Typography>
          <Typography variant="h6">Epizentrum</Typography>
          <Typography variant="body1">
            Lat: {selected?.geometry?.coordinates[1] ?? ""}
          </Typography>
          <Typography variant="body1">
            Lon: {selected?.geometry?.coordinates[0] ?? ""}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => setSelected({})}
            disabled={!selected?.properties}
          >
            <HeartBroken />
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5">Einstellungen</Typography>
          <Typography variant="h6">Kreisradiusfaktor</Typography>
          <Slider
            min={1}
            max={3}
            step={0.5}
            value={slider}
            onChange={(_e, value) => setSlider(value)}
          />
        </CardContent>
      </Card>
    </aside>
  </div>
);
