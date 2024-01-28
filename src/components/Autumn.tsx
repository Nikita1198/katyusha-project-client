import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SelectSeeding from "./fields/SelectSeeding";
import DateOfGermination from "./fields/DataPicker";
import CustomFieldTwo from "./fields/CustomFieldTwo";
import store from "../stores/calculationStore";

export default function Autumn() {
  const step2Data = store.getStep2();

  return (
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
        />
      </Grid>
      <Grid item xs={12}>
      <TextField
          label="Развитие с осени"
          id='comment'
          multiline
          fullWidth
          rows={8}
          defaultValue={step2Data.comment}
          InputLabelProps={{ shrink: true }}
          placeholder="Укажите развитие посевов с оcени"
          onChange={(e) => {
            store.updateStep2Field(e.target.id, e.target.value);
          }}
          inputProps={{
            style: {
              height: "100px",
            },
          }}
        />
      </Grid>
    </Grid>
  );
}
