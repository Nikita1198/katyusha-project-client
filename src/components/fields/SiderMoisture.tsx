import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

const marks = [
  {
    value: 200,
    label: "200",
  },
  {
    value: 500,
    label: "500",
  },
  {
    value: 800,
    label: "800",
  },
];

export default function SiderMoisture() {
    const [value, setValue] = React.useState(230);

    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography id="input-slider" component={'span'} variant={'body2'} gutterBottom>
      Влагообеспеченность предприятия, мм
      </Typography>
      <Slider
        id="input-slider"
        aria-label="Always visible"
        defaultValue={500}
        onChange={handleSliderChange}
        step={10}
        max={800}
        min={200}
        marks={marks}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
