import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/ru";
import { ruRU } from "@mui/x-date-pickers/locales";
import store from "../../stores/calculationStore";

export default function DateOfGermination() {
  const date = store.getStep2();

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="ru"
      localeText={
        ruRU.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      <DatePicker
        label="Дата всходов"
        onChange={(newValue) => {
          store.updateStep2Field('date', newValue);
        }}
        value={date.date}
        slotProps={{
          textField: {
            required: true,
            fullWidth: true,
          },
        }}
      />
    </LocalizationProvider>
  );
}
function dayjs(arg0: string): any {
  throw new Error("Function not implemented.");
}

