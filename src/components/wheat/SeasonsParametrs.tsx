import * as React from "react";
import Grid from "@mui/material/Grid";
import CustomDataPicker from "./fields/CustomDataPicker.tsx";
import store from "../../stores/calculationStore";
import Collapse from "@mui/material/Collapse";
import CustomSelect from "./fields/CustomSelect.tsx";
import { observer } from "mobx-react-lite";
import { Box, TextField, Typography } from "@mui/material";
import {
  ammoniumNitrate,
  moisturevalues,
  nitrateNitrogen,
  seedingRate,
  complexFertilizers,
  phosphorusSupply,
} from "./constants/ranges";
import { lightTheme } from "../../themes/theme.tsx";

export default observer(function SeasonsParametrs() {
  const step2Data = store.getStep2();
  const step3Data = store.getStep3();
  const rowColor = lightTheme.palette.secondary.light;
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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CustomSelect
              value={step2Data.complexFertilizers}
              error={invalidFields.includes("complexFertilizers")}
              range={complexFertilizers}
              disabled={false}
              id="complexFertilizers"
              label="Норма сложных удобрений (Аммофос 12:52)"
              helperText="* Фосфор в действующем веществе"
              size="small"
              onUpdate={(id, newValue) => store.updateStep2Field(id, newValue)}
              units="кг/га"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomSelect
              value={step2Data.ammoniumNitrate}
              error={invalidFields.includes("ammoniumNitrate")}
              range={ammoniumNitrate}
              disabled={false}
              id="ammoniumNitrate"
              label="Норма аммиачной селитры"
              size="small"
              onUpdate={(id, newValue) => store.updateStep2Field(id, newValue)}
              units="кг/га"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomSelect
              value={step2Data.seedingRate}
              error={invalidFields.includes("seedingRate")}
              range={seedingRate}
              disabled={false}
              id="seedingRate"
              label="Норма высева"
              size="small"
              onUpdate={(id, newValue) => store.updateStep2Field(id, newValue)}
              units="млн"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomDataPicker error={invalidFields.includes("date")} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomSelect
              value={step2Data.phosphorusSupply}
              error={invalidFields.includes("phosphorusSupply")}
              range={phosphorusSupply}
              disabled={false}
              id="phosphorusSupply"
              label="Запас фосфора в почве"
              size="small"
              onUpdate={(id, newValue) => store.updateStep2Field(id, newValue)}
              units="мг/кг"
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
              <CustomSelect
                value={step2Data.moistureSpring}
                disabled={!step2Data.plannedFirstYield.display}
                error={invalidFields.includes("moistureSpring")}
                range={moisturevalues}
                id="moistureSpring"
                label="Запас продуктивной влаги в метровом слое"
                size="small"
                onUpdate={(id, newValue) =>
                  store.updateStep2Field(id, newValue)
                }
                units="мм"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomSelect
                value={step2Data.nitrateNitrogen}
                disabled={!step2Data.plannedFirstYield.display}
                error={invalidFields.includes("nitrateNitrogen")}
                range={nitrateNitrogen}
                id="nitrateNitrogen"
                label="Доза нитратного азота в почве (слой 0-40см)"
                size="small"
                onUpdate={(id, newValue) =>
                  store.updateStep2Field(id, newValue)
                }
                units="кг"
              />
            </Grid>
            <Grid item xs={12} sx={{ pt: "16px !important" }}>
              <Collapse
                in={
                  step2Data.nitrateNitrogen !== "Не выбрано" &&
                  step2Data.moistureSpring !== "Не выбрано"
                }
              >
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
                    {step2Data.ammoniumNitrateRequired} кг/га <br />
                    Прогнозируемая урожайность согласно весенней
                    влагообеспеченности: {step3Data.totalresult} ц/га
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
