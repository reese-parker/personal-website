import React, { useState } from "react";

import VisibilitySensor from "react-visibility-sensor";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import styles from "./styles/ContactCardStyles";

export default function ContactCard(props) {
  const [componentIsVisible, setComponentIsVisible] = useState(false);

  const { contactMethod, link } = props;

  const toggleVisibility = (isVisible) => {
    setComponentIsVisible(isVisible);
  };

  const textLink = (contactMethod) => {
    switch (contactMethod) {
      case "email":
        return "parker.rhys@outlook.com";
      case "linkedIn":
        return "linkedin.com/in/reese-parker";
      case "gitHub":
        return "github.com/reese-parker";
      default:
    }
  };
  const iconLink = (contactMethod) => {
    switch (contactMethod) {
      case "email":
        return <EmailIcon sx={styles.Icon} />;
      case "linkedIn":
        return <LinkedInIcon sx={styles.Icon} />;
      case "gitHub":
        return <GitHubIcon sx={styles.Icon} />;
      default:
    }
  };

  return (
    <VisibilitySensor onChange={toggleVisibility} partialVisibility>
      <Fade in={componentIsVisible} timeout={1000}>
        <Card sx={styles.Card}>
          <div style={styles.infoContainer}>
            <Button
              sx={styles.contactMethod}
              component="a"
              href={link}
              size="small"
            >
              {contactMethod}
            </Button>
            <br />
            <Typography
              color="text.secondary"
              sx={styles.textLink}
              gutterBottom
              variant="caption"
              noWrap
              href={link}
              component="a"
            >
              {textLink(contactMethod)}
            </Typography>
          </div>
          <IconButton
            component="a"
            href={link}
            sx={styles.iconContainer}
            disableRipple
          >
            {iconLink(contactMethod)}
          </IconButton>
        </Card>
      </Fade>
    </VisibilitySensor>
  );
}
