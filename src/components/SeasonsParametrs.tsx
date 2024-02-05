import * as React from "react";
import Grid from "@mui/material/Grid";
import SelectSeeding from "./fields/SelectSeeding";
import DateOfGermination from "./fields/DataPicker";
import CustomFieldTwo from "./fields/CustomFieldTwo";
import store from "../stores/calculationStore";
import { observer } from "mobx-react-lite";
import SelectNitrate from "./fields/SelectNitrate";
import { InputAdornment, Box, TextField, Typography } from "@mui/material";

export default observer(function SeasonsParametrs() {
  const step2Data = store.getStep2();

  return (
    <>
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Осень
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <SelectSeeding />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DateOfGermination />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomFieldTwo
              id={"complexFertilizers"}
              label={"Норма сложных удобрений, кг/га"}
              max={250}
              min={50}
              step={10}
              defaultValue={step2Data.complexFertilizers}
              units={"кг/га"}
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomFieldTwo
              id={"ammoniumNitrate"}
              label={"Норма аммиачной селитры, кг/га"}
              max={120}
              min={0}
              step={10}
              defaultValue={step2Data.ammoniumNitrate}
              units={"кг/га"}
              disabled={false}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Развитие с осени"
              id="comment"
              multiline
              required
              fullWidth
              rows={8}
              defaultValue={step2Data.comment}
              InputLabelProps={{ shrink: true }}
              placeholder="Укажите развитие посевов с оcени"
              about="Укажите развитие посевов с оcени"
              onChange={(e) => {
                store.updateStep2Field(e.target.id, e.target.value);
              }}
              inputProps={{
                style: {
                  height: "80px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" sx={{minHeight: 22}}>
              {store.plannedFirstYield.display && (
                <>
                  Предварительная урожайность c Осени:{" "}
                  {store.plannedFirstYield.value} ц/га
                </>
              )}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Весна
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <SelectNitrate disabled={store.plannedFirstYield.display}/>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              label="Требуемое количество аммиачной селитры, кг/га"
              id="ammoniumNitrateRequired"
              type="number"
              value={step2Data.ammoniumNitrateRequired}
              InputLabelProps={{ shrink: true }}
              fullWidth
              disabled={store.calculation.step2.nitrateNitrogen != ""}
              about="Требуемое количество аммиачной селитры"
              onChange={(e) => {
                store.updateStep2Field(e.target.id, e.target.value);
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">кг/га</InputAdornment>,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
});
