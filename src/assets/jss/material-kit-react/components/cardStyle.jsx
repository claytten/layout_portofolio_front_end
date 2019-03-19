const cardStyle = {
	card: {
		border: "0",
		marginBottom: "30px",
		marginTop: "6px",
		color: "rgba(0, 0, 0, 0.87)",
		background: "#fff",
		width: "100%",
		boxShadow:
      	"0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    	position: "relative",
    	display: "flex",
    	flexDirection: "row",
    	minWidth: "0",
    	wordWrap: "break-word",
    	fontSize: "0.875rem",
    	transition: "all 300ms linear",
    	"@media (max-width: 567px)": {
			display: "block"
		},
	},
	cardPlain: {
		background: "transparent",
		boxShadow: "none"
	},
	cardCarousel: {
		overflow: "hidden"
	},
	cardQuery: {
		"@media (max-width: 567px)": {
			maxWidth: "540px"
		},
		"@media (min-width: 768px)": {
			maxWidth: "720px"
		},
		"@media (min-width: 992px)": {
			maxWidth: "1140px"
		},
		"@media (min-width: 1200px)": {
			maxWidth: "1140px"
		}
	}
}

export default cardStyle;