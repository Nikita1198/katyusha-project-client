import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import SelectSeeding from "./fields/SelectSeeding";
import DateOfGermination from "./fields/DataPicker";
import CustomSlider from "./fields/CustomSlider";

const complexFertilizers = [
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

const ammoniumNitrate = [
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

export default function Autumn() {
  return (
    <Box sx={{ m: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={4}>
            <Grid item xs={6} sm={6}>
              <SelectSeeding />
            </Grid>
            <Grid item xs={6} sm={6}>
              <DateOfGermination />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomSlider
                label={"Норма сложных удобрений, кг/га"}
                max={250}
                min={50}
                step={10}
                defaultValue={230}
                units={'кг/га'}
                marks={complexFertilizers}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
            <CustomSlider
                label={"Норма аммиачной селитры, кг/га"}
                max={120}
                min={0}
                step={10}
                defaultValue={80}
                units={'кг/га'}
                marks={ammoniumNitrate}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Развитие с осени" multiline rows={10} fullWidth />
        </Grid>
      </Grid>
    </Box>
  );
}
