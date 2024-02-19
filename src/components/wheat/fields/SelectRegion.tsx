import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import data from "../../../assets/regions.json";
import store from "../../../stores/calculationStore";

export default function SelectRegion({error, value}) {

  const handleChange = (e) => {
    store.updateStep1Field("region", e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required error={error}>
        <InputLabel >Регион</InputLabel>
        <Select
          labelId="region"
          id="region"
          name="region"
          label="Регион"
          required
          value={value}
          onChange={handleChange}
        >
          {data.regions.map((item) => {
            return (
              <MenuItem key={item.name} value={item.name}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
