import React from "react";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const styles = {
  footerContainer: {
    // border: "2px solid yellow",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
  },
};

export default function Footer() {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.IconButtonsContainer}>
        <IconButton sx={styles.LinkedInIconButton} disableRipple>
          <LinkedInIcon color="primary" />
        </IconButton>
        <IconButton sx={styles.GitHubIconButton} disableRipple>
          <GitHubIcon color="primary" />
        </IconButton>
      </div>
      <Typography variant="caption" color="primary">2022</Typography>
    </footer>
  );
}
