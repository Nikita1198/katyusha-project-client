import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import data from '../../assets/regions.json'

export default function SelectRegion() {
  const [region, setRegion] = React.useState("");

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required>
        <InputLabel id="region">Регион</InputLabel>
        <Select
          labelId="region"
          id="region"
          name="region"
          label="Регион"
          required
          defaultValue={0}
          onChange={handleChange}
        >
        <MenuItem value={0}>Не выбрано</MenuItem>
        {data.regions.map((item) => {
              return <MenuItem key={item.name} value={item.code}>{item.name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
