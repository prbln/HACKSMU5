import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function StartDate() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]} sx={{ mt: 1, mr: 1 }}>
        <DatePicker label="Start Date" />
      </DemoContainer>
      <DemoContainer components={["DatePicker"]} sx={{ mt: 1, ml: 1 }}>
        <DatePicker label="End Date" />
      </DemoContainer>
    </LocalizationProvider>
  );
}
