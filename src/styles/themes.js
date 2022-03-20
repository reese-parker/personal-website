import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2a9d8f",
    },
  },
  typography: {
    fontFamily: ["Sora", "sans-serif"].join(","),
  },
});
