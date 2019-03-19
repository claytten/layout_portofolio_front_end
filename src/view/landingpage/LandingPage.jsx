import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "components/header/Header.jsx";
import Footer from "components/footer/Footer.jsx";
import HeaderLinks from "components/header/HeaderLinks.jsx";
import Parallax from "components/parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/view/landingPage.jsx";

//section for this page
import AboutMe from "./sections/AboutMe.jsx";
import CountSection from "./sections/Count.jsx";
import PortofolioSection from "./sections/PortofolioSection.jsx";
import Contact from "./sections/Contact.jsx";
import ScrollUp from "./sections/ScrollUp.jsx";

class LandingPage extends React.Component {
	render() {
		const { classes, ...rest } = this.props;
		return(
			<div>
				<Header 
					color="transparent"
					brand="TRENCH"
					rightLinks={<HeaderLinks />}
					fixed
					changeColorOnScroll={{
			            height: 400,
			            color: "white"
			        }}
					{...rest}
				/>
				<Parallax filter image={require("assets/img/landing-bg.jpg")} />
				<div className={classNames(classes.main, classes.mainRaised)} >
					<AboutMe />
					<CountSection />
					<PortofolioSection />
					<Contact />
					<ScrollUp scrollStepInPx="50" delayInMs="16.66" />
				</div>
				<Footer />
			</div>
		);
	}
}

export default withStyles(landingPageStyle)(LandingPage);

