import { container } from "assets/jss/material-kit-react.jsx";

const CountStyle = {
	root: {
		background: "#333", 
		color: "#fff", 
		textAlign: "center", 
		padding: "70px 0"
	},
	container: {
		color: "#ffffff",
		display: "flex",
		flexWrap: "wrap",
		...container
	},
	column: {
		width: "25%",
		"@media (max-width: 567px)": {
	      width: "50%",
	      paddingTop: "10px"
	    },
		'& h3': {
			fontFamily: `'Poppins', sans-serif`,
			fontSize: "70px",
			fontWeight: "700",
			margin: "0",
			padding: "0",
			lineHeight: "1"
		},
		'& span': {
			fontSize: "15px",
			display: "block"
		}
	}
};

export default CountStyle;