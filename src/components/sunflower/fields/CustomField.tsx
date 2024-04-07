import * as React from "react";
import { InputAdornment, Box, TextField } from "@mui/material";
import sunflowerStore from "../../../stores/sunflowerStore";

export default function CustomField({
  id,
  label,
  max,
  min = 0, // Устанавливаем значение по умолчанию для min, если оно не предоставлено
  step,
  defaultValue,
  units,
  error,
}) {
  const [value, setValue] = React.useState(defaultValue.toString());

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const handleBlur = () => {
    let adjustedValue = parseFloat(value);
    adjustedValue = Math.max(adjustedValue, min);
    adjustedValue =
      max !== undefined ? Math.min(adjustedValue, max) : adjustedValue;
    setValue(adjustedValue.toString());
    sunflowerStore.updateStep1Field(id, adjustedValue);
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
        error={error}
        variant="outlined"
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder="0"
        InputLabelProps={{ shrink: true }}
        InputProps={{
          inputProps: {
            step: step,
            min: min,
            max: max,
          },
          endAdornment: <InputAdornment position="end">{units}</InputAdornment>,
        }}
      />
    </Box>
  );
}
