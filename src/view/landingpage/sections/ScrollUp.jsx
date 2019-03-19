import React from "react";
// // @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


import ScrollUpStyle from "assets/jss/material-kit-react/view/landingPageSections/scrollUpStyle.jsx";

class ScrollUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			intervalId: 0
		}
	}

	scrollStep() {
		if (window.pageYOffset === 0) {
		    clearInterval(this.state.intervalId);
		}
		window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
	}

	scrollToTop() {
		let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
		this.setState({ intervalId: intervalId });
	}
  
	render() {
		const {classes} = this.props;
		return(
			<div className={classes.root}>
				<button className={classes.scroll} onClick={ () => { this.scrollToTop(); }}>
	                <i className="fas fa-chevron-up"></i>
	            </button>
            </div>
		);
	}
}

export default withStyles(ScrollUpStyle)(ScrollUp);