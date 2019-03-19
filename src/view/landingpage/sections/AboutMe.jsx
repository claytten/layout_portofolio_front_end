import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
//@material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


//core/components
import GridContainer from "components/grid/GridContainer.jsx";
import GridItem from "components/grid/GridItem.jsx";
import Card from "components/card/Card.jsx";
import CardBody from "components/card/CardBody.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import PaperSheet from "components/paper/Paper.jsx";


import aboutMeStyle from "assets/jss/material-kit-react/view/landingPageSections/aboutMeStyle.jsx";

import profile from "assets/img/profile.jpg";


class AboutMe extends React.Component {
	render() {
		const { classes } = this.props;
		const imageClasses = classNames(
	      classes.imgRaised,
	      classes.imgRounded,
	      classes.imgFluid
	    );
		return(
			<div className={classes.container}>
				<GridContainer >
					<Card plain  >
						<CardBody cardwidth>
							<h3 className={classes.cardTitle}>ABOUT ME </h3>
							<h4 className={classes.cardTitle}>
			                  Wahyu Aji Sulaiman
			                  <br />
			                  <small className= {classes.smallTitle} >Web Designer</small>
			                </h4>
							<p className={classes.description}>
			                    You can write here details about one of your team members.
			                    You can give more details about what they do. Feel free to
			                    add some links for people to be able to
			                    follow them outside the site.
			                    You can write here details about one of your team members.
			                    You can give more details about what they do. Feel free to
			                    add some links for people to be able to
			                    follow them outside the site.
		                  	</p>
						</CardBody>
	                  	<GridItem className={classes.itemGrid}>
							<img src={profile} alt="..." className={imageClasses}/>
						</GridItem>
					</Card>
					<Card cardQuery plain>
						<CardBody cardwidth borderBody = "borderBodyRight" >
							<h3 className={classes.cardTitle}>MY SKILLS </h3>
							<h6 className={classes.cardTitle}>HTML5 & CSS3 </h6>
							<CustomLinearProgress
			                  variant="determinate"
			                  color="gray"
			                  value={90}
			                />

			                <h6 className={classes.cardTitle}>Javascript </h6>
			                <CustomLinearProgress
			                  variant="determinate"
			                  color="gray"
			                  value={70}
			                />

			                <h6 className={classes.cardTitle}>Mysql </h6>
			                <CustomLinearProgress
			                  variant="determinate"
			                  color="gray"
			                  value={50}
			                />

			                <h6 className={classes.cardTitle}>REACT </h6>
			                <CustomLinearProgress
			                  variant="determinate"
			                  color="gray"
			                  value={70}
			                />
						</CardBody>
						<CardBody cardBox cardwidth>
							<h3 className={classes.cardTitle}>ACADEMY EXPERIENCE </h3>
							<CardBody 
								cardFlex style={{padding: "0", paddingTop: "20px"}} >
								<PaperSheet 
									brandSkillTitle = "Treehouse"
									brandSkillDesc = "Front End Development (2017)"
									routed
								/>
								<PaperSheet 
									brandSkillTitle = "Udemy"
									brandSkillDesc = "Wordpress Development (2017-2018)"
									routed
								/>
								<PaperSheet 
									brandSkillTitle = "Code Academy"
									brandSkillDesc = "Front End Development (2018)"
									routed
								/>
								<PaperSheet 
									brandSkillTitle = "Solo Learn"
									brandSkillDesc = "Front End Development (2018)"
									routed
								/>
								<PaperSheet 
									brandSkillTitle = "Zero to Mastery"
									brandSkillDesc = "Andre Neagoie (2018 - 2019)"
									routed
								/>
								<PaperSheet 
									brandSkillTitle = "Junior-Senior Development"
									brandSkillDesc = "Andre Neagoie (2019)"
									routed
								/>
							</CardBody>
						</CardBody>
					</Card>
				</GridContainer>
			</div>
		);
	}
}

export default withStyles(aboutMeStyle)(AboutMe);