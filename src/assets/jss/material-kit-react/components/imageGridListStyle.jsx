const ImageGridListStyle = theme => ({
	root: {
	    flexGrow: 1,
	    backgroundColor: theme.palette.background.paper,
	},
	Half: {
		width: "50%",
		"@media( max-width: 567px)": {
			width: "100%"
		}
	},
	Full: {
		width: "100%"
	},
	gridHalf: {
		display: "flex",
		flexWrap: "wrap"
	},
	gridFull: {
		display: "block"
	}
});

export default ImageGridListStyle;