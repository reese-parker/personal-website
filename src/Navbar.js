import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const styles = {
  AppBar: {
    background: "#000",
    // border: "2px solid blue",
    height: "100%"
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoContainer: {
    border: "1px solid",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function Navbar(props) {
  const { handleOpenDrawer } = props;

  const toggleDrawer = (open) => {
    handleOpenDrawer();
  };

  return (
    <AppBar sx={styles.AppBar} position="static">
      <Toolbar sx={styles.Toolbar}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon color="primary" />
        </IconButton>

        <Box color="primary" style={styles.logoContainer}>
          <Typography color="primary" sx={styles.logo}>
            RP
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
