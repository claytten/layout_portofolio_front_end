const PaperStyle = {
	root: {
		padding: "0",
		margin: "0",
		width: "50%",
		height: "100%",
		marginBottom: "20px",
		paddingRight: "10px",
		"@media (max-width: 567px)": {
			width: "100%",
			marginBottom: "10px"
		}
	},
	routed: {
		"@media (max-width: 567px)": {
			height: "100px !important",
			padding: "10px !important",
			'& h3': {
				fontSize: "1.2rem"
			}
		},
	},
	paper: {
		border: "0.8px solid #3c485833",
		boxShadow: "1px 1px 1px 1px #3c485833",
		paddingTop: "20px",
		paddingBottom: "100px",
		paddingLeft: "10px",
		paddingRight: "10px",
		borderRadius: "0 !important",
		height: "100px"
	},
	paragraph: {
		"@media (max-width: 567px)": {
			fontSize: "0.714rem"
		},
		"@media (min-width: 768px)": {
			maxWidth: "720px"
		},
		"@media (min-width: 992px)": {
			fontSize: "0.748rem"
		},
		"@media (min-width: 1200px)": {
			fontSize: "0.875rem"
		}
	}
}

export default PaperStyle;