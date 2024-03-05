import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";

export default function CustomSelect({
  value,
  range,
  id,
  label,
  error,
  size,
  disabled,
  units,
  onUpdate,
  helperText = "",
}) {
  const handleChange = (e) => {
    onUpdate(id, e.target.value);
  };

  const renderValue = (selectedValue) =>
    selectedValue !== "Не выбрано" ? `${selectedValue} ${units}` : "Не выбрано";

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required error={error} disabled={disabled}>
        <InputLabel>{`${label}, ${units}`}</InputLabel>
        <Select
          labelId={`${id}_label`}
          id={id}
          label={`${label}, ${units}`}
          size={size}
          required
          onChange={handleChange}
          value={value}
          renderValue={renderValue}
        >
          {range.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.value}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
}
