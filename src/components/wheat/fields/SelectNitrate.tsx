import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import store from "../../../stores/calculationStore";

export default function SelectNitrate({ disabled }) {
  const step2Datav = store.getStep2();

  const handleChange = (e) => {
    store.updateStep2Field("nitrateNitrogen", e.target.value);
  };

  const range = [
    { value: "Не выбрано" },
    { value: "0" },
    { value: "20" },
    { value: "40" },
    { value: "60" },
    { value: "80" },
    { value: "100" },
    { value: "120" },
    { value: "140" },
    { value: "160" },
    { value: "180" },
    { value: "200" },
  ];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required>
        <InputLabel>Доза нитратного азота в почве (слой 0-40см)</InputLabel>
        <Select
          labelId="nitrateNitrogen"
          id="nitrateNitrogen"
          name="nitrateNitrogen"
          label="Доза нитратного азота в почве (слой 0-40см), кг"
          required
          disabled={!disabled}
          onChange={handleChange}
          value={step2Datav.nitrateNitrogen}
        >
          {range.map((item) => {
            return (
              <MenuItem key={item.value} value={item.value}>
                {item.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
