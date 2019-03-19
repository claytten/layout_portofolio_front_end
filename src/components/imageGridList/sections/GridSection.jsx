import React from "react";
import PropTypes from 'prop-types';
//nodejs library that concatenates style
import withStyles from "@material-ui/core/styles/withStyles";

//@material-ui core components
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ButtonBase from '@material-ui/core/ButtonBase';
import Zoom from '@material-ui/core/Zoom';

import GridSectionStyle from "assets/jss/material-kit-react/components/sections/gridSectionStyle.jsx";

const GridSection = ({...props}) => {
	const {classes, theme, indexIn, imageURLs, col } = props;
	const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };
	return(
		<div className={classes.imageGrid}>
       		<GridList cellHeight={180} className={classes.gridList} cols={col}>
				{imageURLs.map( (tile,index) => (
					<GridListTile key={tile.id} cols={tile.cols} rows={tile.cols} classes={{ root: classes.gridListWidth}} >
						<Zoom
							in={true}
							timeout={transitionDuration}
							style={{
							  transitionDelay: `${indexIn  ? transitionDuration.exit : 0}ms`,
							}}
						>
						<ButtonBase
						  focusRipple
						  className={classes.image}
						  focusVisibleClassName={classes.focusVisible}
						  style={{
						    position: "unset"
						  }}
						>
							<span >
								<img src={tile.img} alt={tile.title} className={classes.gridImg} />
							</span>
							<span className={classes.imageBackdrop} />
						</ButtonBase>
						</Zoom>
					</GridListTile>
				   ))
				}
			</GridList>
		</div>
	)
}

GridSection.propTypes = {
	classes: PropTypes.object.isRequired,
	indexIn: PropTypes.object.isRequired,
	imageURLs: PropTypes.arrayOf(PropTypes.object).isRequired,
	col     : PropTypes.number,
}

export default withStyles(GridSectionStyle,{ withTheme: true })(GridSection);