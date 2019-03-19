import React from "react";
import PropTypes from 'prop-types';

//@material-ui core components
import Typography from '@material-ui/core/Typography';

const TabContainer = props => {
  return (
    <Typography component="div" dir={props.dir}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

export default TabContainer;