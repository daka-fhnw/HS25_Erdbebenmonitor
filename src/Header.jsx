import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import { intervals, magnitudes } from "./constants.jsx";

export const Header = ({ magnitude, setMagnitude, interval, setInterval }) => (
  <div className="header">
    <header>
      <Typography variant="h1" sx={{ color: "#ff0000" }}>
        IGEO Erdbebenmonitor
      </Typography>
      <Stack direction="row" spacing={2}>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          {magnitudes.map((value) => (
            <Button
              variant={magnitude === value ? "outlined" : "contained"}
              onClick={() => setMagnitude(value)}
            >
              {value}
            </Button>
          ))}
        </ButtonGroup>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          {intervals.map((value) => (
            <Button
              variant={interval === value ? "outlined" : "contained"}
              onClick={() => setInterval(value)}
            >
              {value}
            </Button>
          ))}
        </ButtonGroup>
      </Stack>
    </header>
  </div>
);
