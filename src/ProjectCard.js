import React, { useState } from "react";

import VisibilitySensor from "react-visibility-sensor";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

import styles from "./styles/ProjectCardStyles";

export default function ProjectCard(props) {
  const [componentIsVisible, setComponentIsVisible] = useState(false);

  const toggleVisibility = (isVisible) => {
    setComponentIsVisible(isVisible);
  };

  const { name, technologies, description, projectLink, githubLink } = props;

  const technologyList = technologies.join(", ");

  return (
    <VisibilitySensor onChange={toggleVisibility} partialVisibility>
      <Fade in={componentIsVisible} timeout={1000}>
        <Card sx={styles.Card}>
          <CardContent>
            <Typography sx={{ marginBottom: 1.5 }} color="primary">
              {name.toUpperCase()}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
          <CardActions sx={styles.CardActions}>
            <Button component="a" href={projectLink} size="small">
              View Project
            </Button>
            <Button component="a" href={githubLink} size="small">
              View Code
            </Button>
          </CardActions>
          <CardContent>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              Built with: {technologyList}
            </Typography>
          </CardContent>
        </Card>
      </Fade>
    </VisibilitySensor>
  );
}
