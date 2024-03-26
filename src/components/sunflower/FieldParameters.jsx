import * as React from "react";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import store from "../../stores/sunflowerStore";
import { observer } from "mobx-react-lite";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { fieldMetadata } from "./fieldMetadata";
import CustomSelect from "./fields/CustomSelect";

const Field = ({ fieldKey }) => {
  const fieldInfo = fieldMetadata[fieldKey];
  const value = store.getStep1()[fieldKey];
  const isError = store.getInvalidFields().includes(fieldKey);

  switch (fieldInfo.type) {
    case "text":
      return (
        <TextField
          required
          id={fieldInfo.id}
          name={fieldInfo.id}
          label={fieldInfo.label}
          type={fieldInfo.type}
          fullWidth
          value={value}
          error={isError}
          variant="outlined"
          onChange={(e) => store.updateStep1Field(e.target.id, e.target.value)}
        />
      );
    case "select":
      return (
        <CustomSelect
          value={value}
          error={isError}
          range={fieldInfo.options}
          id={fieldInfo.id}
          label={fieldInfo.label}
          onUpdate={(id, newValue) => store.updateStep1Field(id, newValue)}
          size={fieldInfo.size}
          disabled={fieldInfo.disabled}
          units={fieldInfo.units}
        />
      );
  }
};

export default observer(function FieldParameters() {
  const step1Data = store.getStep1();
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Основная информация
      </Typography>
      <Grid container spacing={4}>
        {Object.keys(step1Data).map((fieldKey) => (
          <Grid
            item
            xs={12}
            sm={fieldMetadata[fieldKey].gridSize || 6}
            key={fieldKey}
          >
            <Field fieldKey={fieldKey} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});
