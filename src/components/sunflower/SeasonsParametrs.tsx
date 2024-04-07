import * as React from "react";
import Grid from "@mui/material/Grid";
import sunflowerStore from "../../stores/sunflowerStore.js";
import Collapse from "@mui/material/Collapse";
import CustomSelect from "./fields/CustomSelect.tsx";
import { observer } from "mobx-react-lite";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { lightTheme } from "../../themes/theme.tsx";
import {
  ammoniumNitrate,
  complexFertilizers,
  moisturevalues,
  phosphorusSupply,
} from "./constants/ranges.js";

export default observer(function SeasonsParametrs() {
  const step2Data = sunflowerStore.getStep2();
  const step3Data = sunflowerStore.getStep3();
  const rowColor = lightTheme.palette.secondary.light;
  const invalidFields: string[] = sunflowerStore.getInvalidFields();
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
              value={step2Data.phosphorusSupply}
              error={invalidFields.includes("phosphorusSupply")}
              range={phosphorusSupply}
              disabled={false}
              id="phosphorusSupply"
              label="Содержание фосфора в почве"
              size="small"
              onUpdate={(id, newValue) =>
                sunflowerStore.updateStep2Field(id, newValue)
              }
              units="мг/кг"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomSelect
              value={step2Data.complexFertilizers}
              error={invalidFields.includes("complexFertilizers")}
              range={complexFertilizers}
              disabled={false}
              id="complexFertilizers"
              label="Доза удобрений (фосфора) в действующем веществе"
              size="small"
              onUpdate={(id, newValue) =>
                sunflowerStore.updateStep2Field(id, newValue)
              }
              units="кг/га"
            />
          </Grid>
        </Grid>
      </Box>
      <Collapse
        in={
          step2Data.complexFertilizers !== "Не выбрано" &&
          step2Data.phosphorusSupply !== "Не выбрано"
        }
      >
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
                disabled={false}
                error={invalidFields.includes("moistureSpring")}
                range={moisturevalues}
                id="moistureSpring"
                label="Запас продуктивной влаги в слое 0-100см"
                size="small"
                onUpdate={(id, newValue) =>
                  sunflowerStore.updateStep2Field(id, newValue)
                }
                units="мм"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomSelect
                value={step2Data.ammoniumNitrate}
                disabled={false}
                error={invalidFields.includes("ammoniumNitrate")}
                range={ammoniumNitrate}
                id="ammoniumNitrate"
                label="Аммиачная селитра при/перед посевом"
                size="small"
                onUpdate={(id, newValue) =>
                  sunflowerStore.updateStep2Field(id, newValue)
                }
                units="кг"
              />
            </Grid>
            <Grid item xs={12} sx={{ pt: "16px !important" }}>
              <Collapse
                in={
                  step2Data.ammoniumNitrate !== "Не выбрано" &&
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
