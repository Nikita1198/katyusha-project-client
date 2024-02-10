import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SelectRegion from "../wheat/fields/SelectRegion";
import store from "../../stores/calculationStore";
import CustomField from "../wheat/fields/CustomField";
import { observer } from 'mobx-react-lite';
import { Box, Typography } from "@mui/material";

export default observer(function FieldParameters() {
  const step1Data = store.getStep1();

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Основная информация
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="company"
            name="company"
            label="Предприятие"
            type="text"
            fullWidth
            value={step1Data.company}
            variant="outlined"
            onChange={(e) => {
              store.updateStep1Field(e.target.id, e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectRegion />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="variety"
            name="variety"
            label="Сорт"
            required
            type="text"
            value={step1Data.variety}
            onChange={(e) => {
              store.updateStep1Field(e.target.id, e.target.value);
            }}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="field"
            name="field"
            type="text"
            value={step1Data.field}
            label="Поле №:"
            onChange={(e) => {
              store.updateStep1Field(e.target.id, e.target.value);
            }}
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
            value={step1Data.square}
            type="number"
            InputProps={{
              inputMode: "numeric",
              endAdornment: <InputAdornment position="end">га</InputAdornment>,
            }}
            onChange={(e) => {
              store.updateStep1Field(e.target.id, e.target.value);
            }}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="predecessor"
            name="predecessor"
            label="Предшественник"
            fullWidth
            value={step1Data.predecessor}
            type="text"
            onChange={(e) => {
              store.updateStep1Field(e.target.id, e.target.value);
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomField
            id={"moisture"}
            label={"Годовая влагообеспеченность предприятия, мм"}
            max={800}
            min={200}
            step={10}
            defaultValue={step1Data.moisture}
            units={"мм"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="plannedYield"
            name="plannedYield"
            label="Планируемая урожайность, ц/га"
            type="number"
            defaultValue={step1Data.plannedYield}
            InputProps={{
              inputMode: "numeric",
              endAdornment: <InputAdornment position="end">ц/га</InputAdornment>,
            }}
            placeholder="0"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              store.updateStep1Field(e.target.id, e.target.value);
            }}
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
})
