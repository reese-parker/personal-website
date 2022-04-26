import React from "react";
import { Link } from "react-scroll";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function Menu({ handleCloseDrawer }) {
  return (
    <Box sx={{width: "150px"}}>
      <List>
        <Link to="about" smooth={true} duration={500}>
          <ListItem button onClick={handleCloseDrawer}>
            <ListItemText primary="about" />
          </ListItem>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <ListItem button onClick={handleCloseDrawer}>
            <ListItemText primary="projects" />
          </ListItem>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <ListItem button onClick={handleCloseDrawer}>
            <ListItemText primary="contact" />
          </ListItem>
        </Link>
      </List>
    </Box>
  );
}
