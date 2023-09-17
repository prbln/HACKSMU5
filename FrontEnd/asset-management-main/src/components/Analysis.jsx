import { Box, IconButton, Typography } from "@mui/material";
import Revenue from "./Revenue";
import Units from "./Units";

export const Analysis = (props) => {
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
          width: 1000,
          height: 700,
          paddingLeft: 0,
          paddingTop: 5,
          paddingRight: 0,
          bgcolor: "white",
        }}
      >
        <Box sx={{ display: "flex" }}> </Box>

        <Revenue />
      </Box>

      <Box
        borderRadius={5}
        boxShadow={5}
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          width: 400,
          height: 400,
          bgcolor: "white",
          paddingLeft: 10,
        }}
      >
        <Units />
      </Box>
    </Box>
  );
};
