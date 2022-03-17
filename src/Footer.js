import React from "react";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const styles = {
  footerContainer: {
    background: "#000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
};

export default function Footer() {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.IconButtonsContainer}>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/reeseparker/"
          sx={styles.LinkedInIconButton}
          disableRipple
        >
          <LinkedInIcon color="primary" />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/reese-parker"
          sx={styles.GitHubIconButton}
          disableRipple
        >
          <GitHubIcon color="primary" />
        </IconButton>
      </div>
      <Typography variant="caption" color="primary">
        2022
      </Typography>
    </footer>
  );
}
