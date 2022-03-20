import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import VisibilitySensor from "react-visibility-sensor";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";

import styles from "./styles/AboutSectionStyles";

export default function AboutSection(props) {
  const [nameIsVisible, setNameIsVisible] = useState(!props.isLoading);
  const [jobTitleIsVisible, setJobTitleIsVisible] = useState(!props.isLoading);
  const [descriptionIsVisible, setDescriptionIsVisible] = useState(
    !props.isLoading
  );
  const [projectsButtonIsVisible, setProjectsButtonIsVisible] = useState(false);

  const toggleVisibility = (isVisible, visibilityToggle) => {
    visibilityToggle(isVisible);
  };

  useEffect(() => {
    setTimeout(() => {
      setProjectsButtonIsVisible(true);
    }, 2500);
  }, []);

  return (
    <Grid
      id="about"
      container
      direction="column"
      alignItems="flex-start"
      component="section"
      style={styles.sectionContainer}
      wrap="nowrap"
    >
      <Grid id="header" item xs={3}>
        <VisibilitySensor
          onChange={(isVisible) => {
            toggleVisibility(isVisible, setNameIsVisible);
          }}
          partialVisibility
        >
          <Fade in={nameIsVisible} timeout={1500}>
            <Typography variant="h3" sx={styles.name}>
              REESE PARKER
            </Typography>
          </Fade>
        </VisibilitySensor>
      </Grid>

      <Grid item xs={2}>
        <VisibilitySensor
          onChange={(isVisible) => {
            toggleVisibility(isVisible, setJobTitleIsVisible);
          }}
          partialVisibility
        >
          <Fade in={jobTitleIsVisible} timeout={2000}>
            <Typography color="primary" sx={styles.jobTitle} variant="h4">
              FRONT END DEVELOPER
            </Typography>
          </Fade>
        </VisibilitySensor>
      </Grid>

      <Grid sx={styles.description} item xs={3}>
        <VisibilitySensor
          onChange={(isVisible) => {
            toggleVisibility(isVisible, setDescriptionIsVisible);
          }}
          partialVisibility
        >
          <Fade in={descriptionIsVisible} timeout={2000}>
            <p>
              Hi, my name is <span style={styles.highlightColor}>Reese</span>.
            </p>
          </Fade>
        </VisibilitySensor>
        <VisibilitySensor
          onChange={(isVisible) => {
            toggleVisibility(isVisible, setDescriptionIsVisible);
          }}
          partialVisibility
        >
          <Fade in={descriptionIsVisible} timeout={2000}>
            <p>
              I'm a front-end developer living in
              <span style={styles.highlightColor}> Toronto</span>, Canada. I
              build responsive web applications using
              <span style={styles.highlightColor}> React</span>.
            </p>
          </Fade>
        </VisibilitySensor>
      </Grid>

      <Grid sx={styles.buttonContainer} item xs={2}>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          style={{ width: "100%" }}
        >
          <Fade in={projectsButtonIsVisible} timeout={1500}>
            <Button sx={styles.projectsButton} variant="outlined">
              check out my projects
            </Button>
          </Fade>
        </Link>
      </Grid>
    </Grid>
  );
}
