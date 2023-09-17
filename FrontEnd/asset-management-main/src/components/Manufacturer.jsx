import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Manufacturer() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ ml: 2, mt: 2, mb: 1, mr: 2, width: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Manufacturer</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Asset Type"
          onChange={handleChange}
        >
          <MenuItem value={1}>Manufacturer 1</MenuItem>
          <MenuItem value={2}>Manufacturer 2</MenuItem>
          <MenuItem value={3}>Manufacturer 3</MenuItem>
          <MenuItem value={4}>Manufacturer 4</MenuItem>
          <MenuItem value={5}>Manufacturer 5</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
