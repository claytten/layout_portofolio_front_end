import React from 'react';

//@material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
	grid: {
		position: "relative",
		width: "41.66666667%",
		minHeight: "1px",
		paddingRight: "15px",
		paddingLeft: "15px",
		flexBasis: "auto",
		"@media (max-width: 567px)": {
			width: "100% !important"
		},
	}
};

const GridItem = ({...props}) => {
	const {
		classes,
		children,
		className,
		...rest
	} = props;
	return (
		<Grid item {...rest} className={classes.grid + " " + className} >
			{children}
		</Grid>
	)
}

export default withStyles(style)(GridItem);