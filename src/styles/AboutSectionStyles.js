const styles = {
  sectionContainer: {
    height: "100vh",
    letterSpacing: ".1rem",
    paddingTop: "64px",
    paddingLeft: "1rem",
    color: "white",
  },
  name: {
    paddingTop: "25px",

    "@media(max-width: 400px)": {
      fontSize: "2.5rem",
    },
    "@media(min-width: 600px)": {
      fontSize: "4rem",
    },
    "@media(min-width: 900px)": {
      paddingTop: "50px",
    },
  },
  jobTitle: {
    "@media(min-width: 600px)": {
      fontSize: "3rem",
    },
    "@media(min-width: 900px)": {
      paddingTop: "50px",
    },
  },
  description: {
    "@media(min-width: 600px)": {
      paddingTop: "50px",
    },
  },
  buttonContainer: {
    paddingTop: "75px",
    width: "100%",
    
    "@media(min-width: 600px)": {
      paddingTop: "100px",
    },
    "@media(max-height: 500px)": {
      display: "none",
    },
  },
  highlightColor: {
    color: "#2a9d8f",
  },
};

export default styles;
