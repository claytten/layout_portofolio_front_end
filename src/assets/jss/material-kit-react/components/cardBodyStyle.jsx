const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto",

  },
  cardFlex: {
    display: "flex",
    flexWrap : "wrap"
  },
  cardWidth: {
  	width: "50%",
    "@media (max-width: 567px)": {
      width: "100%",
      border: "none !important",
      paddingLeft: "0.5rem !important",
      '& h3': {
        fontSize: "1.3rem "
      },
      '& h4': {
        fontSize: "0.8rem "
      }
    },
  },
  cardBox: {
    border: "0",
    padding: "0",
    paddingLeft: "0.9375rem",
    paddingTop: "0.9375rem",
    "@media (min-width: 567px)": {
      paddingLeft: "1.6rem",
      paddingRight: "1.5rem",
    },

  },
  borderBody: {
  	border: "2px solid #3c485833"
  }, 
  borderBodyTop: {
  	borderTop: "2px solid #3c485833"
  },
  borderBodyRight: {
  	borderRight: "2px solid #3c485833"
  },
  borderBodyBottom: {
  	borderBottom: "2px solid #3c485833"
  },
  borderBodyLeft: {
  	borderLeft: "2px solid #3c485833"
  }    
};

export default cardBodyStyle;