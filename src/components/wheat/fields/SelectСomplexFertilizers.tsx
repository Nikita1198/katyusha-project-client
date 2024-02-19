import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import store from "../../../stores/calculationStore";

export default function SelectСomplexFertilizers({ error, value }) {
  const handleChange = (e) => {
    store.updateStep2Field("complexFertilizers", e.target.value);
  };

  const range = [
    { value: "Не выбрано" },
    { value: "70" },
    { value: "80" },
    { value: "90" },
    { value: "100" },
    { value: "110" },
    { value: "120" },
    { value: "130" },
    { value: "140" },
    { value: "150" },
    { value: "160" },
    { value: "170" },
    { value: "180" },
    { value: "190" },
    { value: "200" },
  ];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required error={error}>
        <InputLabel>Норма сложных удобрений (Аммофос 12:52), кг/га</InputLabel>
        <Select
          labelId="complexFertilizers"
          id="complexFertilizers"
          name="complexFertilizers"
          label="Норма сложных удобрений (Аммофос 12:52), кг/га"
          required
          onChange={handleChange}
          size="small"
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
