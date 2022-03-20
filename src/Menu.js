import React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { Link } from "react-scroll";

export default function Menu(props) {
  return (
    <Box>
      <List>
        <Link
          to="about"
          smooth={true}
          duration={500}
        >
          <ListItem button onClick={props.handleCloseDrawer}>
            <ListItemText primary="about" />
          </ListItem>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
        >
          <ListItem button onClick={props.handleCloseDrawer}>
            <ListItemText primary="projects" />
          </ListItem>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
        >
          <ListItem button onClick={props.handleCloseDrawer}>
            <ListItemText primary="contact" />
          </ListItem>
        </Link>
      </List>
    </Box>
  );
}
