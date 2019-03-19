import React from "react";
//nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import PaperStyle from "assets/jss/material-kit-react/components/paperStyle.jsx";

const PaperSheet = ({...props}) => {
  const { classes, brandSkillTitle, brandSkillDesc, routed } = props;
  const mobileOpen = classNames({
    [classes.routed] : routed,
    [classes.paper] : true
  })
  const brandSkillTitleComponent = <Typography variant="h5" component="h3">{brandSkillTitle}</Typography>;
  const brandSkillDescComponent = <Typography component="p" className={classes.paragraph}>{brandSkillDesc}</Typography>;
  return (
    <div className={classes.root}>
      <Paper className={mobileOpen}>
        {brandSkillTitleComponent}
        {brandSkillDescComponent}
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  brandSkillTitle: PropTypes.string,
  brandSkillDesc: PropTypes.string,
  routed: PropTypes.bool
};

export default withStyles(PaperStyle)(PaperSheet);