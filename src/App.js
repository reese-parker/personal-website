import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import useToggleState from "./hooks/useToggleState";
import AppLoadingBar from "./AppLoadingBar";
import Navbar from "./Navbar";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Menu from "./Menu";




function App() {
  const [isDrawerOpen, toggleDrawer] = useToggleState(false);
  const [isAppLoading, toggleAppLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      toggleAppLoading(false);
    }, 1500);
  }, []);

  return (
    <>
        <Navbar handleOpenDrawer={toggleDrawer} />
        {isAppLoading ? (
          <AppLoadingBar isAppLoading={isAppLoading} />
        ) : (
          <>
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </>
        )}
    

      <Drawer
        anchor={"left"}
        open={isDrawerOpen}
        onClose={toggleDrawer}
      
        elevation={1}
      >
        <Menu handleCloseDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
}

export default App;
