import * as React from "react";
import { Typography, InputAdornment, Slider, Box, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const Input = styled(TextField)`
  max-width: 6rem;
`;

export default function CustomSlider({label, max, min, step, defaultValue,units, marks}) {
  const [value, setValue] = React.useState(defaultValue);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? min : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < min) {
      setValue(min);
    } else if (value > max) {
      setValue(max);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs>
          <Typography
            id="input-slider"
            component={"span"}
            variant={"body2"}
            gutterBottom
          >
            {label}
          </Typography>
          <Slider
            id="input-slider"
            aria-label="Always visible"
            defaultValue={defaultValue}
            onChange={handleSliderChange}
            step={step}
            max={max}
            min={min}
            value={value}
            marks={marks}
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            variant="outlined"
            onChange={handleInputChange}
            onBlur={handleBlur}
            InputProps={{
                step: step,
                min: min,
                max: max,
              endAdornment: (
                <InputAdornment position="end">{units}</InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
