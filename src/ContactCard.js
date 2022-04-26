import React, { useState } from "react";

import VisibilitySensor from "react-visibility-sensor";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import Fade from "@mui/material/Fade";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import styles from "./styles/ContactCardStyles.module.css";

export const iconLink = (contactMethod) => {
  switch (contactMethod) {
    case "Email":
      return (
        <EmailIcon
          data-testid={`${contactMethod}-icon`}
          className={styles.Icon}
        />
      );
    case "LinkedIn":
      return (
        <LinkedInIcon
          data-testid={`${contactMethod}-icon`}
          className={styles.Icon}
        />
      );
    case "GitHub":
      return (
        <GitHubIcon
          data-testid={`${contactMethod}-icon`}
          className={styles.Icon}
        />
      );
    default:
  }
};

export default function ContactCard({ contactMethod, link }) {
  const [componentIsVisible, setComponentIsVisible] = useState(false);

  const toggleVisibility = (isVisible) => {
    setComponentIsVisible(isVisible);
  };

  return (
    <VisibilitySensor onChange={toggleVisibility} partialVisibility>
      <Fade in={componentIsVisible} timeout={1000}>
        <Card
          data-testid={`contactCard-${contactMethod}`}
          className={styles.Card}
        >
          <IconButton
            component="a"
            href={link}
            className={styles.iconContainer}
            disableRipple
          >
            {iconLink(contactMethod)}
          </IconButton>

          <Button
            className={styles.contactMethod}
            component="a"
            href={link}
            size="small"
          >
            {contactMethod}
          </Button>
        </Card>
      </Fade>
    </VisibilitySensor>
  );
}
