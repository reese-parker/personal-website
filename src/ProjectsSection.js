import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import projects from "./data/projectsData";
import styles from "./styles/ProjectsSectionStyles.module.css";
import ProjectCard from "./ProjectCard";

const projectCards = projects.map((project) => {
  return (
    <Grid className={styles.GridItem} key={project.name} item xs={12} sm={6} md={4}>
      <ProjectCard
        name={project.name}
        technologies={project.technologies}
        description={project.description}
        projectLink={project.projectLink}
        githubLink={project.githubLink}
      />
    </Grid>
  );
});

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.sectionContainer}>
      <div style={{ height: "56px" }} />
      <Typography variant="h3">PROJECTS</Typography>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        className={styles.GridContainer}
      >
        {projectCards}
      </Grid>
    </section>
  );
}
