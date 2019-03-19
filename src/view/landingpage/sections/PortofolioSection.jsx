import React from "react";
//nodejs library that concatenates classes
import withStyles from "@material-ui/core/styles/withStyles";

//core components
import ImageGridList from 'components/imageGridList/ImageGridList.jsx';
import GridContainer from "components/grid/GridContainer.jsx";
import Card from "components/card/Card.jsx";
import CardBody from "components/card/CardBody.jsx";


import PortofolioSectionStyle from "assets/jss/material-kit-react/view/landingPageSections/PortofolioSectionStyle.jsx";


class PortofolioSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index : 0
		}
	};

	handleChange = (event, index) => {
		this.setState({ 
			index
		});
	};

	render() {
		const { classes } = this.props;
		return (
		<div className={classes.container}>
			<GridContainer>
				<Card plain>
					<CardBody cardwidth>
						<h3 className={classes.cardTitle}>MY LATEST WORK </h3>
						<h4 className={classes.cardTitle}>Here's some of our recent work</h4>
						<ImageGridList 
							handleChange={this.handleChange}
							indexed={this.state.index}
						/>
					</CardBody>
				</Card>
			</GridContainer>
		</div>
		);
	}
};



export default withStyles(PortofolioSectionStyle)(PortofolioSection);