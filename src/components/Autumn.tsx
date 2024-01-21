import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { Box } from "@mui/material";
import SelectSeeding from "./fields/SelectSeeding";
import DateOfGermination from "./fields/DataPicker";
import SliderComplexFertilizers from "./fields/SliderComplexFertilizers";
import SiderAmmoniumNitrate from "./fields/SiderAmmoniumNitrate";

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
              <SliderComplexFertilizers />
            </Grid>
            <Grid item xs={12} sm={12}>
              <SiderAmmoniumNitrate />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          label="Развитие с осени"
          multiline
          rows={10}
          fullWidth
/>
        </Grid>
      </Grid>
    </Box>
  );
}
