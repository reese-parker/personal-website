import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./styles/NavbarStyles.module.css";

export default function Navbar({ handleOpenDrawer }) {
  return (
    <>
      <AppBar id="header" className={styles.AppBar}>
        <Toolbar className={styles.Toolbar}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            className={styles.IconButton}
            onClick={handleOpenDrawer}
          >
            <MenuIcon color="primary" />
          </IconButton>

          <Box className={styles.logoContainer}>
            <Typography color="primary" className={styles.logo}>
              RP
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

    </>
  );
}
