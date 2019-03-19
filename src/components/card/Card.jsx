import React from "react";
//nodejs library that concatenates classes
import classNames from "classnames";
//nodejs library to set properties for components
import PropTypes from "prop-types";
//@material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import cardStyle from "assets/jss/material-kit-react/components/cardStyle.jsx";

const Card = ({...props}) => {
	const { classes, className, children, plain, carousel,cardQuery, ...rest} = props;
	const cardClasses = classNames({
		[classes.cardQuery]: cardQuery,
		[classes.card]: true,
		[classes.cardPlain]: plain,
		[classes.cardCarousel]: carousel,
		[className]: className !== undefined
	});
	return (
		<div className={cardClasses} {...rest} >
			{children}
		</div>
	)
}

Card.propTypes = {
	className : PropTypes.string,
	plain: PropTypes.bool,
	cardQuery: PropTypes.bool,
	carousel: PropTypes.bool,
}

export default withStyles(cardStyle)(Card);