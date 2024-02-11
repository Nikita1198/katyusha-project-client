import * as React from "react";
import Grid from "@mui/material/Grid";
import DateOfGermination from "../wheat/fields/DataPicker";
import CustomFieldTwo from "../wheat/fields/CustomFieldTwo";
import store from "../../stores/calculationStore";
import { observer } from "mobx-react-lite";
import { InputAdornment, Box, TextField, Typography } from "@mui/material";
import SelectNitrate from "../wheat/fields/SelectNitrate";
import SelectSeeding from "../wheat/fields/SelectSeeding";
import SelectMoistureSpring from "./fields/SelectMoistureSpring";

export default observer(function SeasonsParametrs() {
  const step2Data = store.getStep2();
  const invalidFields: string[] = store.getInvalidFields();
  return (
    <>
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Осень
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <SelectSeeding error={invalidFields.includes("seedingRate")} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DateOfGermination error={invalidFields.includes("date")} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomFieldTwo
              id={"complexFertilizers"}
              label={"Норма сложных удобрений (Аммофос 12:52), кг/га"}
              max={250}
              min={50}
              step={10}
              defaultValue={step2Data.complexFertilizers}
              units={"кг/га"}
              error={invalidFields.includes("complexFertilizers")}
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
              error={invalidFields.includes("ammoniumNitrate")}
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
              error={invalidFields.includes("comment")}
              defaultValue={step2Data.comment}
              InputLabelProps={{ shrink: true }}
              placeholder="Укажите развитие посевов с оcени"
              about="Укажите развитие посевов с оcени"
              onChange={(e) => {
                store.updateStep2Field(e.target.id, e.target.value);
              }}
              inputProps={{
                style: {
                  height: "45px",
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 3}}>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }} 
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          sx={{ mb: 2, width: '100%' }}
        >
          <Typography variant="h6" sx={{ textAlign: { xs: 'left', sm: 'left' } }}>
            Весна
          </Typography>
          <Typography variant="subtitle2" sx={{ textAlign: { xs: 'left', sm: 'right' }, my: { xs: 2, sm: 0 } }}>
            {step2Data.plannedFirstYield.display && (
              <>
                Предварительная урожайность c Осени: {step2Data.plannedFirstYield.value} ц/га
              </>
            )}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <SelectNitrate disabled={step2Data.plannedFirstYield.display} />
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
          <Grid item xs={12} sm={6}>
            <SelectMoistureSpring disabled={step2Data.plannedFirstYield.display} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
});
