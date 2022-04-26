import React from "react";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import styles from "./styles/AboutSectionStyles.module.css";

const technologies = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "GIT",
  "JEST",
  "MATERIAL UI",
  "FIREBASE",
];

export default function AboutSection({ isLoading }) {
  const nameIsVisible = !isLoading;
  const jobTitleIsVisible = !isLoading;
  const descriptionIsVisible = !isLoading;

  return (
    <section className={styles.sectionContainer} id="about">
      <div style={{ height: "56px" }} />
      <Grid
        container
        direction="column"
        alignItems="flex-start"      
        wrap="nowrap"
      >
        <Grid id="header" item xs={3}>
          <Fade in={nameIsVisible} timeout={1500}>
            <Typography variant="h3" className={styles.name}>
              REESE PARKER
            </Typography>
          </Fade>
        </Grid>

        <Grid item xs={2}>
          <Fade in={jobTitleIsVisible} timeout={2000}>
            <Typography
              color="primary"
              className={styles.jobTitle}
              variant="h4"
            >
              WEB DEVELOPER
            </Typography>
          </Fade>
        </Grid>

        

        <Grid className={styles.description} item xs={3}>
          <Fade in={descriptionIsVisible} timeout={2000}>
            <p>
              Hi, my name is{" "}
              <span className={styles.highlightColor}>Reese</span>.
            </p>
          </Fade>

          <Fade in={descriptionIsVisible} timeout={2000}>
            <div>
              <p>
                I'm a developer living in
                <span className={styles.highlightColor}> Toronto</span>, Canada.
                I build responsive web applications using
                <span className={styles.highlightColor}> React</span>.
              </p>
              <br />
              <div className={styles.technologiesContainer}>
                <p className={styles.technologiesDescription}>
                  Here are some of the technologies I use:
                </p>

                <Grid className={styles.technologiesGridContainer} justifyContent="flex-start" container spacing={1}>
                  {technologies.map((technology) => (
                    <Grid key={technology} item xs={6} sm={3} md={1}>
                      <Card className={styles.technologyCard}>
                        <p className={styles.technology}>{technology}</p>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </Fade>
        </Grid>
      </Grid>
    </section>
  );
}
