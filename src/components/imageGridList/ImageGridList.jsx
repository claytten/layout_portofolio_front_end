import React from "react";
import PropTypes from 'prop-types';
//nodejs library that concatenates style
import withStyles from "@material-ui/core/styles/withStyles";

//core components
import GridSection from "./sections/GridSection.jsx";
import tileData from "./sections/ListImage.jsx";
import Tabb from "components/tab/Tab.jsx"


import ImageGridListStyle  from "assets/jss/material-kit-react/components/imageGridListStyle.jsx";

const ImageGridList = ({...props }) => {
	const { classes, indexed, handleChange } = props;
	let image;
	switch(indexed) {
		case 0:
			image = <div className={classes.gridHalf}>
						<GridSection 
							indexIn={{indexed}} imageURLs={tileData.filter(tiles => tiles.position === "left")} 
							classes={{imageGrid: classes.Half}}
							col={2}
						/>
						<GridSection 
							indexIn={{indexed}} imageURLs={tileData.filter(tiles => tiles.position === "right")} 
							classes={{imageGrid: classes.Half}}
							col={2}
						/>
					</div>;
			break;
		case 1:
			image = 
						<GridSection 
							indexIn={{indexed}} imageURLs={tileData.filter(tiles => tiles.position === "left")}
							col={4}
						/>;
			break;
		case 2:
			image = <div className={classes.gridFull}>
						<GridSection 
							indexIn={{indexed}} imageURLs={tileData.filter(tiles => tiles.position === "right")}
							col={4}
						/>
					</div>;
			break;
		default:
			image = <h1>you got an error</h1>
			break;
	}
	return(
		<div className={classes.root}>
        	<Tabb
        		indexTab={indexed}
        		handleChangeTab={handleChange}
        	/>
        	{image}
        </div>
	);
};

ImageGridList.propTypes = {
	indexed: PropTypes.number.isRequired,
	handleChange : PropTypes.func.isRequired
}

export default withStyles(ImageGridListStyle)(ImageGridList);