import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import store from "../../../stores/calculationStore";

export default function SelectAmmoniumNitrate({ error, value }) {
  const handleChange = (e) => {
    store.updateStep2Field("ammoniumNitrate", e.target.value);
  };

  const range = [
    { value: "Не выбрано" },
    { value: "10" },
    { value: "20" },
    { value: "30" },
    { value: "40" },
    { value: "50" },
    { value: "60" },
    { value: "70" },
    { value: "80" },
    { value: "90" },
    { value: "100" },
  ];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required error={error}>
        <InputLabel>Норма аммиачной селитры, кг/га</InputLabel>
        <Select
          labelId="ammoniumNitrate"
          id="ammoniumNitrate"
          name="ammoniumNitrate"
          size="small"
          label="Норма аммиачной селитры, кг/га"
          required
          onChange={handleChange}
          value={value}
          renderValue={(value) => value !== "Не выбрано" ? `${value} кг/га` : "Не выбрано"}
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
