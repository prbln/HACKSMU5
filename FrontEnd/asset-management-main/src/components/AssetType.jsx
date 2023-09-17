import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AssetType() {
  const [assetType, setAssetType] = React.useState("");
  const handleChange = (event) => {
    setAssetType(event.target.value);
  };

  return (
    <Box sx={{ ml: 10, mt: 2, mb: 1, mr: 2, width: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Asset Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={assetType}
          label="Asset Type"
          onChange={handleChange}
        >
          <MenuItem value={1}>Pluming System</MenuItem>
          <MenuItem value={2}>Air Conditioning Systems</MenuItem>
          <MenuItem value={3}>Eletric Panel</MenuItem>
          <MenuItem value={4}>HVAC</MenuItem>
          <MenuItem value={5}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
