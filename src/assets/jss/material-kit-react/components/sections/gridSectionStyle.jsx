const GridSectionStyle = theme => ({
	imageGrid: {
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-around',
	    overflow: 'hidden'
	},
	gridList: {
		width: "100%",
		height: "auto"
	},
	gridImg: {
		width: "100% !important",
		height: "100% !important"
	},
	gridListWidth: {
		"@media(max-width: 567px)": {
			height: "auto !important"
		}
	},
	image: {
		'&:hover, &$focusVisible': {
			zIndex: 1,
				'& $imageBackdrop': {
				  	position: 'absolute',
				    left: 0,
				    right: 0,
				    top: 0,
				    bottom: 0,
					backgroundColor: theme.palette.common.black,
					opacity: 0.5,
					transition: theme.transitions.create('opacity'),
				},
		},
	},
	focusVisible: {},
	imageButton: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white,
	},
	imageBackdrop: {
		opacity: 0,
	},
})

export default GridSectionStyle;