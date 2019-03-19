import { container, title } from "assets/jss/material-kit-react.jsx";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

const aboutStyle = {
	container: {
		zInde: "12",
		color: "#ffffff",
		...container
	},
	title: {
		...title,
		marginBottom: "1rem",
		marginTop: "30px",
		minHeight: "32px",
		textDecoration: "none"
	},
	...imagesStyles,
	itemGrid: {
		marginLeft: "auto",
		marginRight: "auto"
	},
	cardTitle :{
		color: "#6c757d",
		fontWeight: "700"
	},
	smallTitle: {
		color: "#6c757d"
	},
	description: {
		color: "#999"
	}
};

export default aboutStyle;