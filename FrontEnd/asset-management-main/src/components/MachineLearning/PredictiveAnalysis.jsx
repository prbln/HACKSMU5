import { Box, Button, IconButton, Typography } from "@mui/material";
import Status from "../Status";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Revenue from "../Revenue";
import MyRadar from "./MyRadar";
import Notify from "../Notify";
export const PredictiveAnalysis = (props) => {
  const [manufacturer, setManufacturer] = useState("");
  const [assetType, setAssetType] = useState("");
  const [floorNumber, setFloorNumber] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [display, setdisplay] = useState(false);

  const handleFloorChange = (event) => {
    const selectedFloor = event.target.value;
    setFloorNumber(selectedFloor);
    setRoomNumber("");
  };

  const generateRoomOptions = () => {
    const startRoom = floorNumber * 100 + 1;
    const endRoom = floorNumber * 100 + 20;
    const roomOptions = [];

    for (let i = startRoom; i <= endRoom; i++) {
      roomOptions.push(
        <MenuItem key={i} value={i}>
          {i}
        </MenuItem>
      );
    }

    return roomOptions;
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        borderRadius={5}
        boxShadow={5}
        sx={{
          margin: 10,
          marginLeft: 13,
          marginRight: 5,
          width: 450,
          height: 500,
          padding: 10,
          paddingTop: 5,
          bgcolor: "white",
        }}
      >
        <div>
          <Typography variant="h4" sx={{ color: "purple" }}>
            Future Maintaince Requirements
          </Typography>
          <FormControl fullWidth sx={{ margin: 1 }}>
            <InputLabel>Manufacturer</InputLabel>
            <Select
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
            >
              <MenuItem value={1}>manufacturer 1</MenuItem>
              <MenuItem value={2}>manufacturer 2</MenuItem>
              <MenuItem value={3}>manufacturer 3</MenuItem>
              <MenuItem value={4}>manufacturer 4</MenuItem>
              <MenuItem value={5}>manufacturer 5</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ margin: 1 }}>
            <InputLabel>Floor Number</InputLabel>
            <Select value={floorNumber} onChange={handleFloorChange}>
              {Array.from({ length: 19 }, (_, i) => (
                <MenuItem key={i + 1} value={i + 1}>
                  {i + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ margin: 1 }}>
            <InputLabel>Room Number</InputLabel>
            <Select
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
            >
              {generateRoomOptions()}
            </Select>
          </FormControl>
          <Button
            onClick={() => {
              setdisplay(!display);
            }}
            sx={{
              backgroundColor: "#1976D2",
              color: "white",
              margin: 2,
            }}
          >
            {display ? "Close" : "Submit"}
          </Button>
          <Notify />
        </div>
      </Box>
      {display && (
        <Box
          borderRadius={5}
          boxShadow={5}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            width: 900,
            height: 700,
            bgcolor: "white",
            paddingLeft: 10,
          }}
        >
          <MyRadar />
        </Box>
      )}
    </Box>
  );
};
