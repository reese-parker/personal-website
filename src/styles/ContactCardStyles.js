const styles = {
  Card: {
    width: "95%",
    height: "150px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (min-width: 600px)": {
      width: "70%",
    },
  },
  infoContainer: {
    paddingLeft: "5%",
  },
  contactMethod: {
paddingLeft: "5px",
paddingBottom: "20px"
  },
  textLink: {
    paddingLeft: "5px",
    
  },
  iconContainer: {
    paddingRight: "5%",
  },
  Icon: {
    fontSize: "1.5rem",
    "&:hover": {
      color: "#2a9d8f",
    },
    "@media (min-width: 600px)": {
      fontSize: "2rem",
    },
  },
};

export default styles;
