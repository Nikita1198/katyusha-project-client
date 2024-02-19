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
import SelectСomplexFertilizers from "./fields/SelectСomplexFertilizers";
import SelectAmmoniumNitrate from "./fields/SelectAmmoniumNitrate";
import { rawTheme } from "../../themes/theme.tsx";
import Collapse from "@mui/material/Collapse";

export default observer(function SeasonsParametrs() {
  const step2Data = store.getStep2();
  const step3Data = store.getStep3();
  const rowColor = rawTheme.palette.secondary.light;
  const invalidFields: string[] = store.getInvalidFields();
  return (
    <>
      <Box>
        <Typography
          variant="h6"
          sx={{ mb: 2, textAlign: { xs: "center", sm: "left" } }}
        >
          Осень
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <SelectСomplexFertilizers
              value={step2Data.complexFertilizers}
              error={invalidFields.includes("complexFertilizers")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectAmmoniumNitrate
              value={step2Data.ammoniumNitrate}
              error={invalidFields.includes("ammoniumNitrate")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectSeeding
              value={step2Data.seedingRate}
              error={invalidFields.includes("seedingRate")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DateOfGermination error={invalidFields.includes("date")} />
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
              size="small"
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
          <Grid item xs={12} sx={{ pt: "16px !important" }}>
            <Collapse in={step2Data.plannedFirstYield.display}>
              <Box
                sx={{
                  borderRadius: "4px",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  backgroundColor: rowColor,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                    my: { xs: 1, sm: 0 },
                    p: 1,
                  }}
                >
                  Прогнозируемая урожайность согласно влагообеспеченности
                  хозяйства и уровня азотно фосфорного питания:{" "}
                  {step2Data.plannedFirstYield.value} ц/га
                </Typography>
              </Box>
            </Collapse>
          </Grid>
        </Grid>
      </Box>
      <Collapse in={step2Data.plannedFirstYield.display}>
        <Box sx={{ mt: 2 }}>
          <Box sx={{ mb: 2, width: "100%" }}>
            <Typography
              variant="h6"
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              Весна
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <SelectMoistureSpring
                value={step2Data.moistureSpring}
                disabled={step2Data.plannedFirstYield.display}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectNitrate
                value={step2Data.nitrateNitrogen}
                disabled={step2Data.plannedFirstYield.display}
              />
            </Grid>
            <Grid item xs={12} sx={{ pt: "16px !important" }}>
              <Collapse in={step2Data.nitrateNitrogen !== "Не выбрано" && step2Data.moistureSpring !== "Не выбрано"}>
              <Box
                sx={{
                  borderRadius: "4px",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  backgroundColor: rowColor,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                    my: { xs: 1, sm: 0 },
                    p: 1,
                  }}
                >
                  Требуемое количество аммиачной селитры:{" "}
                  {step2Data.ammoniumNitrateRequired} кг/га <br/>
                  Прогнозируемая урожайность согласно весенней влагообеспеченности:{" "}
                  {step3Data.totalresult} ц/га 
                </Typography>
              </Box>
            </Collapse>
            </Grid>
          </Grid>
        </Box>
      </Collapse>
    </>
  );
});
