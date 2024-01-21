import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SelectRegion from "./fields/SelectRegion";
import { Box } from "@mui/material";
import SiderMoisture from "./fields/SiderMoisture";
import store from "../stores/calculationStore"

export default function FieldParameters() {
  return (
    <Box sx={{ m: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="company"
            name="company"
            label="Предприятие"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {
              store.setCalculation(e.target.value, e.target.value );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectRegion />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            id="variety"
            name="variety"
            label="Сорт"
            required
            type="text"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            required
            id="field"
            name="field"
            type="text"
            label="Поле №:"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="square"
            name="square"
            label="Площадь, га"
            type="number"
            InputProps={{
              inputMode: "numeric",
              endAdornment: <InputAdornment position="end">га</InputAdornment>,
            }}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="predecessor"
            name="predecessor"
            label="Предшественник"
            fullWidth
            type="text"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
          <SiderMoisture />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="planned-yield"
            name="planned-yield"
            label="Планируемая урожайность, ц/га"
            type="number"
            defaultValue={80}
            InputProps={{
              inputMode: "numeric",
              endAdornment: (
                <InputAdornment position="end">ц/га</InputAdornment>
              ),
            }}
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
