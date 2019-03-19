import React from "react";

//@material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import CountStyle from "assets/jss/material-kit-react/view/landingPageSections/countStyle.jsx";

class CountSection extends React.Component {
	render() {
		const { classes } = this.props;
		return(
			<div className={classes.root} >
				<div className={classes.container}>
					<div className={classes.column}>
						<h3>0</h3>
						<span>PROJECT</span>
					</div>
					<div className={classes.column}>
						<h3>10</h3>
						<span>PORTOFOLIO</span>
					</div>
					<div className={classes.column}>
						<h3>1</h3>
						<span>CLIENT</span>
					</div>
					<div className={classes.column}>
						<h3>1</h3>
						<span>AWARDS</span>
					</div>
			    </div>
			</div>
		);
	}
};

export default withStyles(CountStyle)(CountSection);