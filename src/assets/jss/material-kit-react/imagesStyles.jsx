const imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto",
    paddingTop: "30px",
    "@media (max-width: 567px)": {
      marginTop: "-40px"
    },
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRaised: {
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
};

export default imagesStyles;