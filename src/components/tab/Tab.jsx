import React from 'react';
import PropTypes from 'prop-types';
//nodejs library that concatenates style
import withStyles from "@material-ui/core/styles/withStyles";

//@material-ui core components
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import TabStyle from "assets/jss/material-kit-react/components/tabStyle.jsx";

const Tabb = ({...props}) => {
	const { classes, indexTab, handleChangeTab } = props;
  	return (
  		<Tabs
          value={indexTab}
          onChange={handleChangeTab}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator, scrollButtons: classes.scrollButton }}
          variant="scrollable"
          scrollButtons="on"
        >
			<Tab
				disableRipple
				classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
				label="All Design"
			>
			</Tab>
			<Tab
				disableRipple
				classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
				label="Part Website"
			/>
			<Tab
				disableRipple
				classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
				label="Full Website"
			/>
		</Tabs>
  	);
};

Tabb.propTypes = {
	indexTab: PropTypes.number.isRequired,
	handleChangeTab : PropTypes.func.isRequired
}

export default withStyles(TabStyle)(Tabb);