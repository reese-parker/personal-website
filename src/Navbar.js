import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./styles/NavbarStyles";

export default function Navbar(props) {
  return (
    <>
      <AppBar id="header"  sx={styles.AppBar}>
        <Toolbar  sx={styles.Toolbar}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={styles.IconButton}
            onClick={props.handleOpenDrawer}
          >
            <MenuIcon color="primary" />
          </IconButton>

          <Box style={styles.logoContainer}>
            <Typography color="primary" sx={styles.logo}>
              RP
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar   sx={styles.headerToolbar} />
    </>
  );
}
