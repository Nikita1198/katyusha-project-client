import * as React from "react";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import sunflowerStore from "../../stores/sunflowerStore";
import CustomField from "../sunflower/fields/CustomField";
import { observer } from "mobx-react-lite";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { regions } from "../../constants/regions";
import TextField from "@mui/material/TextField";
import CustomSelect from "../sunflower/fields/CustomSelect";

export default observer(function FieldParameters() {
  const step1Data = sunflowerStore.getStep1();
  const invalidFields: string[] = sunflowerStore.getInvalidFields();
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
              sunflowerStore.updateStep1Field(e.target.id, e.target.value);
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
            onUpdate={(id, newValue) =>
              sunflowerStore.updateStep1Field(id, newValue)
            }
            units=""
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="hybrid"
            name="hybrid"
            label="Гибрид"
            required
            type="text"
            value={step1Data.hybrid}
            error={invalidFields.includes("hybrid")}
            onChange={(e) => {
              sunflowerStore.updateStep1Field(e.target.id, e.target.value);
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
              sunflowerStore.updateStep1Field(e.target.id, e.target.value);
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
              sunflowerStore.updateStep1Field(e.target.id, e.target.value);
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
              sunflowerStore.updateStep1Field(e.target.id, e.target.value);
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomField
            id={"moisture"}
            label={"Годовая влагообеспеченность предприятия"}
            max={800}
            min={0}
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
              sunflowerStore.updateStep1Field(e.target.id, e.target.value);
            }}
            onFocus={(e) =>
              e.target.addEventListener(
                "wheel",
                function (e) {
                  e.preventDefault();
                },
                { passive: false },
              )
            }
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
});
