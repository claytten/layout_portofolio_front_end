/*!

 =========================================================
 * Material Kit React - v1.3.0 based on Material Kit - v2.0.2
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2018 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = 260;
const primaryColor = "#9c27b0";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";

const transition = {
	transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const containerFluid = {
	paddingRight: "15px",
	paddingLeft: "15px",
	marginRight: "auto",
	marginLeft: "auto",
	width: "100%"
};


const mediaQuery = {
	"@media (min-width: 567px)": {
		maxWidth: "540px"
	},
	"@media (min-width: 768px)": {
		maxWidth: "720px"
	},
	"@media (min-width: 992px)": {
		maxWidth: "1140px"
	},
	"@media (min-width: 1200px)": {
		maxWidth: "1140px"
	}
}

const container = {
	...containerFluid,
	"@media (min-width: 567px)": {
		maxWidth: "540px"
	},
	"@media (min-width: 768px)": {
		maxWidth: "720px"
	},
	"@media (min-width: 992px)": {
		maxWidth: "1140px"
	},
	"@media (min-width: 1200px)": {
		maxWidth: "1140px"
	}
};

const boxShadow = {
	boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};

const defaultFont = {
	fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
	fontWeight: "300",
	lineHeight: "1.5em"
};

const title = {
	  color: "#3C4858",
	  margin: "1.75rem 0 0.875rem",
	  textDecoration: "none",
	  fontWeight: "700",
	  fontFamily: `"Roboto Slab", "Times New Roman", serif`
};

const cardTitle = {
	...title,
	marginTop: "0.625rem"
}


export {
	drawerWidth,
	primaryColor,
	warningColor,
	dangerColor,
	successColor,
	infoColor,
	roseColor,
	grayColor,
	transition,
	containerFluid,
	container,
	boxShadow,
	defaultFont,
	title,
	cardTitle,
	mediaQuery
};

