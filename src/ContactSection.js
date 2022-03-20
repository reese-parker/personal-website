import React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import styles from "./styles/ContactSectionStyles";
import ContactCard from "./ContactCard";

export default function ContactSection() {
  return (
    <Grid
      container
      direction="column"
      spacing={1}
      component="section"
      id="contact"
      style={styles.sectionContainer}
    >
      <Grid item>
        <Typography sx={styles.title} variant="h3">
          CONTACT
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <ContactCard
          contactMethod="email"
          link="mailto:parker.rhys@outlook.com"
        />
      </Grid>
      <Grid item xs={3}>
        <ContactCard
          contactMethod="linkedIn"
          link="https://www.linkedin.com/in/reese-parker/"
        />
      </Grid>
      <Grid item xs={3}>
        <ContactCard
          contactMethod="gitHub"
          link="https://github.com/reese-parker"
        />
      </Grid>
    </Grid>
  );
}
