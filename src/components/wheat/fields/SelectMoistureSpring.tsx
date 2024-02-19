import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import store from "../../../stores/calculationStore";

type MoistureLevel = {
  level: string;
  coefficient: number;
};

export default function SelectMoistureSpring({ disabled, value }) {

  const handleChange = (e) => {
    store.updateStep2Field("moistureSpring", e.target.value); 
  };
  
  const step2Datav = store.getStep2();

  const moistureLevels = [
    { level: 'Не выбрано', coefficient: 0 },
    { level: '200', coefficient: 1.2 },
    { level: '190', coefficient: 1.1 },
    { level: '180', coefficient: 1.05 },
    { level: '170', coefficient: 1.0 },
    { level: '160', coefficient: 0.9 },
    { level: '150', coefficient: 0.85 },
    { level: '140', coefficient: 0.75 },
    { level: '130', coefficient: 0.65 },
    { level: '120', coefficient: 0.5 },
    { level: '110', coefficient: 0.45 },
    { level: '100', coefficient: 0.4 },
    { level: '90', coefficient: 0.35 },
    { level: '80', coefficient: 0.3 },
  ];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required >
        <InputLabel>Запас продуктивной влаги в метровом слое, мм:</InputLabel>
        <Select
          labelId="moistureSpring"
          id="moistureSpring"
          name="moistureSpring"
          label="Запас продуктивной влаги в метровом слое, мм:"
          required
          disabled={!disabled}
          onChange={handleChange}
          size="small"
          renderValue={(value) => value !== "Не выбрано" ? `${value} мм` : "Не выбрано"}
          value={value}
        >
          {moistureLevels.map((item) => (
            <MenuItem key={item.level} value={item.level}>
              {item.level}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
