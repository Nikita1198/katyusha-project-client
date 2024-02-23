import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import store from "../../stores/calculationStore";
import CustomField from "../wheat/fields/CustomField";
import { observer } from "mobx-react-lite";
import { Box, Typography } from "@mui/material";
import { regions } from "./constants/ranges";
import CustomSelect from "../wheat/fields/CustomSelect";

export default observer(function FieldParameters() {
  const step1Data = store.getStep1();
  const invalidFields: string[] = store.getInvalidFields();
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
            error={invalidFields.includes("company")}
            variant="outlined"
            onChange={(e) => {
              store.updateStep1Field(e.target.id, e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomSelect
            value={step1Data.region}
            error={invalidFields.includes("region")}
            range={regions}
            disabled={false}
            id="region"
            label="Регион"
            size="medium"
            onUpdate={(id, newValue) => store.updateStep1Field(id, newValue)}
            units=""
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="variety"
            name="variety"
            label="Сорт"
            required
            type="text"
            value={step1Data.variety}
            error={invalidFields.includes("variety")}
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
            error={invalidFields.includes("field")}
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
            error={invalidFields.includes("square")}
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
            error={invalidFields.includes("predecessor")}
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
            label={"Годовая влагообеспеченность предприятия"}
            max={800}
            min={200}
            step={10}
            defaultValue={step1Data.moisture}
            error={invalidFields.includes("moisture")}
            units={"мм"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="plannedYield"
            name="plannedYield"
            label="Планируемая урожайность"
            type="number"
            defaultValue={step1Data.plannedYield}
            error={invalidFields.includes("plannedYield")}
            InputProps={{
              inputMode: "numeric",
              endAdornment: (
                <InputAdornment position="end">ц/га</InputAdornment>
              ),
            }}
            placeholder="0"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              store.updateStep1Field(e.target.id, e.target.value);
            }}
            onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })} // default убирает скролл 
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
});
