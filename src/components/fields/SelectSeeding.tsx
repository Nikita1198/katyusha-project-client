import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const seedingRate = [
    {value: 2},
    {value: 2.5},
    {value: 3},
    {value: 3.5},
    {value: 4},
    {value: 4.5},
    {value: 5},
]

export default function SelectSeeding() {
  const [rate, setRate] = React.useState(0);

  const handleChange = (event) => {
    setRate(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required>
        <InputLabel id="seedingRate">Норма высева, млн</InputLabel>
        <Select
          labelId="seedingRate"
          id="seedingRate"
          name="seedingRate"
          label="Норма высева, млн"
          required
          defaultValue={4}
          onChange={handleChange}
        >
        {seedingRate.map((item) => {
              return <MenuItem key={item.value} value={item.value}>{item.value}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
