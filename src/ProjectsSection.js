import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { projects } from "./projectsData";
import styles from "./styles/ProjectSectionStyles";
import ProjectCard from "./ProjectCard";


export default function ProjectsSection() {
  const projectCards = projects.map((project) => {
    return (
      <Grid
        key={project.name}
        item
        xs={12}
        sm={6}
        md={4}
      >
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

  return (
    <section id="projects" style={styles.sectionContainer}>
      <Typography variant="h3">PROJECTS</Typography>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={styles.GridContainer}
      >
        {projectCards}
      </Grid>
    </section>
  );
}


