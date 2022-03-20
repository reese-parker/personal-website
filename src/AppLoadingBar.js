import React from "react";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Fade from "@mui/material/Fade";

export default function AppLoadingBar(props) {
  return (
    <Fade in={props.isAppLoading} timeout={500}>
      <div style={{margin: "50% auto"}}>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </div>
    </Fade>
  );
}
