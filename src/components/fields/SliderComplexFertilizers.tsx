import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

const marks = [
  {
    value: 50,
    label: "50 ",
  },
  {
    value: 150,
    label: "150 ",
  },
  {
    value: 230,
    label: "230 ",
  },
];

export default function SliderComplexFertilizers() {
    const [value, setValue] = React.useState(230);

    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography id="input-slider" component={'span'} variant={'body2'} gutterBottom>
        Норма сложных удобрений, кг/га
      </Typography>
      <Slider
        id="input-slider"
        aria-label="Always visible"
        defaultValue={230}
        onChange={handleSliderChange}
        step={10}
        max={250}
        min={50}
        marks={marks}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
