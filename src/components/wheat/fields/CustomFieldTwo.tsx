import * as React from "react";
import { InputAdornment, Box, TextField } from "@mui/material";
import store from "../../../stores/calculationStore";
export default function CustomFieldTwo({
  id,
  label,
  max,
  min,
  step,
  defaultValue,
  units,
  disabled
}) {
  const [value, setValue] = React.useState(defaultValue);

  const handleInputChange = (e) => {
    let newValue = e.target.value === "" ? min : Number(e.target.value);
    setValue(newValue);
    store.updateStep2Field(e.target.id, newValue);
  };

  const handleBlur = (e) => {
    if (value < min) {
      setValue(min);
      store.updateStep2Field(e.target.id, min);
    } else if (value > max) {
      setValue(max);
      store.updateStep2Field(e.target.id, max);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        required
        fullWidth
        id={id}
        label={label}
        type="number"
        disabled={disabled}
        value={value}
        variant="outlined"
        onChange={handleInputChange}
        placeholder="0"
        onBlur={handleBlur}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          inputProps: { step: step, min: min, max: max },
          endAdornment: <InputAdornment position="end">{units}</InputAdornment>,
        }}
      />
    </Box>
  );
}
