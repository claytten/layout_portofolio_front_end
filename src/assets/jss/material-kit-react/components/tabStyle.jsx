const TabStyle = theme => ({
	tabsRoot: {
    	borderBottom: '1px solid #e8e8e8',
	},
	tabsIndicator: {
		backgroundColor: '#1890ff',
	},
	scrollButton: {
		display: "none",
		"@media( max-width: 567px)": {
			display: "block"
		}
	},
	tabRoot: {
		minWidth: 72,
		textTransform: 'initial',
		fontWeight: theme.typography.fontWeightRegular,
		marginRight: theme.spacing.unit * 4,
		fontFamily: [
		  '-apple-system',
		  'BlinkMacSystemFont',
		  '"Segoe UI"',
		  'Roboto',
		  '"Helvetica Neue"',
		  'Arial',
		  'sans-serif',
		  '"Apple Color Emoji"',
		  '"Segoe UI Emoji"',
		  '"Segoe UI Symbol"',
		].join(','),
		'&:hover': {
		  color: '#40a9ff',
		  opacity: 1,
		},
		'&$tabSelected': {
		  color: '#1890ff',
		  fontWeight: theme.typography.fontWeightMedium,
		},
		'&:focus': {
		  color: '#40a9ff',
		},
	},
	tabSelected: {}
});

export default TabStyle;