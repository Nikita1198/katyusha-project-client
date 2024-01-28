import * as React from "react";
import { InputAdornment, Box, TextField } from "@mui/material";
import store from "../../stores/calculationStore";

export default function CustomFieldTree({
  id,
  label,
  max,
  min,
  step,
  defaultValue,
  units,
}) {
  const [value, setValue] = React.useState(defaultValue);

  const handleInputChange = (e) => {
    let newValue = e.target.value === "" ? min : Number(e.target.value);
    setValue(newValue);
    store.updateStep3Field(e.target.id, newValue);
  };

  const handleBlur = () => {
    if (value < min) {
      setValue(min);
    } else if (value > max) {
      setValue(max);
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
        value={value}
        variant="outlined"
        onChange={handleInputChange}
        onBlur={handleBlur}
        InputProps={{
          inputProps: { step: step, min: min, max: max },
          endAdornment: <InputAdornment position="end">{units}</InputAdornment>,
        }}
      />
    </Box>
  );
}
