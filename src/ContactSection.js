import React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import ContactCard from "./ContactCard";
import contactData from "./data/contactData";
import styles from "./styles/ContactSectionStyles.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.sectionContainer}>
      <div style={{ height: "56px" }} />
      <Fade in={true} timeout={1500}>
      <Typography className={styles.title} variant="h3">
        CONTACT
      </Typography></Fade>
      <Grid
        container
        direction="column"
        spacing={1}
        component="section"
        
        className={styles.GridContainer}
      >
        {contactData.map((contact) => (
          <Grid className={styles.GridItem} key={contact.contactMethod} item xs={3}>
            <ContactCard
              contactMethod={contact.contactMethod}
              link={contact.link}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
