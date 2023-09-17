import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationIcon from "@mui/icons-material/Notifications";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Mail";
import MiniDrawer from "./MiniDrawer";
import { purple } from "@mui/material/colors";

export const AppBarComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        {" "}
        <Toolbar sx={{ boxShadow: 5, bgcolor: "rgb(48, 0, 143)" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MiniDrawer />
          </IconButton>
          <Typography
            sx={{
              fontSize: 25,
              flexGrow: 1,
              fontWeight: "bold",
              letterSpacing: 1,
              fontFamily: "'Besley', serif", // Specify the desired font family here
            }}
            letterSpacing={1}
          >
            Property Management Website
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={4}
          >
            <Badge sx={{ cursor: "pointer" }} badgeContent={12} color="error">
              <NotificationIcon />
            </Badge>
            <Badge sx={{ cursor: "pointer" }} badgeContent={2} color="error">
              <EmailIcon />
            </Badge>
            <Badge sx={{ cursor: "pointer" }} badgeContent={17} color="error">
              <ProfileIcon />
            </Badge>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
