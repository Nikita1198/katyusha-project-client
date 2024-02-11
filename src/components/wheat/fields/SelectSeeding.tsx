import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import store from "../../../stores/calculationStore";

const seedingRate = [
    {value: "Не выбрано"},
    {value: 2},
    {value: 2.5},
    {value: 3},
    {value: 3.5},
    {value: 4},
    {value: 4.5},
    {value: 5},
]

export default function SelectSeeding({error}) {
  const [rate, setRate] = React.useState('');

  React.useEffect(() => {
    const step2Data = store.getStep2();
    setRate(step2Data.seedingRate)
  },[])

  const handleChange = (event) => {
    setRate(event.target.value);
    store.updateStep2Field('seedingRate', event.target.value);
  };
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required error={error}>
        <InputLabel id="seedingRate">Норма высева, млн</InputLabel>
        <Select
          labelId="seedingRate"
          id="seedingRate"
          name="seedingRate"
          label="Норма высева, млн"
          required
          value={rate}
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
