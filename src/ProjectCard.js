import React, { useState } from "react";

import VisibilitySensor from "react-visibility-sensor";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

import styles from "./styles/ProjectCardStyles.module.css";

export default function ProjectCard({ name, technologies, description, projectLink, githubLink }) {
  const [componentIsVisible, setComponentIsVisible] = useState(false);

  const toggleVisibility = (isVisible) => {
    setComponentIsVisible(isVisible);
  };

  const technologyList = technologies.join(", ");

  return (
    <VisibilitySensor onChange={toggleVisibility} partialVisibility>
      <Fade in={componentIsVisible} timeout={1000}>
        <Card data-testid={`projectCard-${name}`} className={styles.Card}>
          <CardContent>
            <Typography sx={{ marginBottom: 1.5, height: "50px" }} color="primary">
              {name.toUpperCase()}
            </Typography>
            <Typography sx={{height: "70px"}} variant="body2">{description}</Typography>
          </CardContent>
          <CardActions className={styles.CardActions}>
            <Button component="a" href={projectLink} size="small" data-testid={`projectLink-${projectLink}`}>
              View Project
            </Button>
            <Button component="a" href={githubLink} size="small" data-testid={`githubLink-${githubLink}`}>
              View Code
            </Button>
          </CardActions>
          <CardContent>
            <Typography  data-testid={`technologies-${name}`} variant="caption" color="text.secondary" gutterBottom>
              Built with: {technologyList}
            </Typography>
          </CardContent>
        </Card>
      </Fade>
    </VisibilitySensor>
   
  );
}
