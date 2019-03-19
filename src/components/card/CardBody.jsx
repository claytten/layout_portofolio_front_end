import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import cardBodyStyle from "assets/jss/material-kit-react/components/cardBodyStyle.jsx";

const CardBody = ({...props}) => {
	const { 
		classes, 
		className, 
		children, 
		cardwidth,
		cardBox, 
		borderBody,
		cardFlex, 
		...rest
	} = props;
	const cardBodyClasses = classNames({
		[classes.cardBody]: true,
		[classes.cardWidth]: cardwidth,
		[classes.cardBox]: cardBox,
		[classes[borderBody]]: borderBody,
		[classes.cardFlex]: cardFlex,
		[className]: className !== undefined
	});
	return (
		<div className= {cardBodyClasses} {...rest} > 
			{children}
		</div>
	);
}

CardBody.propTypes = {
	className : PropTypes.string,
	cardwidth: PropTypes.bool,
	cardFlex: PropTypes.bool,
	cardBox: PropTypes.bool,
	borderBody: PropTypes.oneOf([
		"borderBody",
		"borderBodyTop",
		"borderBodyRight",
		"borderBodyBottom",
		"borderbodyLeft"
	])
};

export default withStyles(cardBodyStyle)(CardBody);