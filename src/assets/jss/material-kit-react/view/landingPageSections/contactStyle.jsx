import { container, title } from "assets/jss/material-kit-react.jsx";

const ContactStyle = {
  container: {
    zInde: "12",
    color: "#ffffff",
    ...container
  },
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
    "@media ( max-width: 567px)": {
      marginBottom: "5px"
    }
  },
  description: {
    color: "#999",
    textAlign: "center",
    "@media (max-width: 567px)": {
      fontSize: "1rem"
    }
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  layoutForm: {
    width: "100%",
    "@media(max-width: 567px)": {
      paddingLeft: "10px",
      paddingRight: "10px"
    }
  },
  name: {
    width: "48%",
    marginRight: "2%",
    "@media (max-width: 567px)": {
      width: "100%",
      marginRight: "0"
    }
  },
  email: {
    width: "50%",
    "@media (max-width: 567px)": {
      width: "100%"
    }
  },
  message: {
    width: "100%"
  }
};

export default ContactStyle;
