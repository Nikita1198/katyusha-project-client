import { Grid } from "@mui/material";
import React from "react";
import CustomField from "./fields/CustomField";
import store from "../stores/calculationStore";

export default function Spring() {
  const step3Data = store.getStep3();
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <CustomField
            id={'nitrateNitrogen'}
            label={"Доза нитратного азота в почве (слой 0-40см)"}
            max={200}
            min={0}
            step={20}
            defaultValue={step3Data.nitrateNitrogen}
            units={"кг/га"}
        />
      </Grid>
    </Grid>
  );
}
