import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 80,
    label: "80",
  },
  {
    value: 120,
    label: "120",
  },
];

export default function SiderAmmoniumNitrate() {
    const [value, setValue] = React.useState(80);

    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography id="input-slider2" component={'span'} variant={'body2'} gutterBottom>
        Норма аммиачной селитры, кг/га
      </Typography>
      <Slider
        id="input-slider2"
        aria-label="Always visible"
        defaultValue={80}
        onChange={handleSliderChange}
        step={10}
        max={120}
        min={0}
        marks={marks}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
