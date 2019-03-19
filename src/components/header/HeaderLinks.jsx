import React from "react";

//@material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core comopnents
import Button from "components/customButtons/Button.jsx";


import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle";

const HeaderLinks = ({...props}) => {
	const { classes } = props;
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<Button
					href="#"
					color="transparent"
					target="_blank"
					className={classes.navLink}
				>
				Home
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="#"
					color="transparent"
					target="_blank"
					className={classes.navLink}
				>
				About Me
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="#"
					color="transparent"
					target="_blank"
					className={classes.navLink}
				>
				Portofolio
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="#"
					color="transparent"
					target="_blank"
					className={classes.navLink}
				>
				Contact Me
				</Button>
			</ListItem>
			
		        <Tooltip
		          id="instagram-twitter"
		          title="Follow us on twitter"
		          placement={window.innerWidth > 959 ? "top" : "left"}
		          classes={{ tooltip: classes.tooltip }}
		        >
		          <Button
		            href="https://twitter.com/CreativeTim"
		            target="_blank"
		            color="transparent"
		            className={classes.navLink}
		          >
		            <i className={classes.socialIcons + " fab fa-twitter"} />
		          </Button>
		        </Tooltip>
		        <Tooltip
		          id="instagram-facebook"
		          title="Follow us on facebook"
		          placement={window.innerWidth > 959 ? "top" : "left"}
		          classes={{ tooltip: classes.tooltip }}
		        >
		          <Button
		            color="transparent"
		            href="https://www.facebook.com/CreativeTim"
		            target="_blank"
		            className={classes.navLink}
		          >
		            <i className={classes.socialIcons + " fab fa-facebook"} />
		          </Button>
		        </Tooltip>
		        <Tooltip
		          id="instagram-tooltip"
		          title="Follow us on instagram"
		          placement={window.innerWidth > 959 ? "top" : "left"}
		          classes={{ tooltip: classes.tooltip }}
		        >
		          <Button
		            color="transparent"
		            href="https://www.instagram.com/CreativeTimOfficial"
		            target="_blank"
		            className={classes.navLink}
		          >
		            <i className={classes.socialIcons + " fab fa-instagram"} />
		          </Button>
		        </Tooltip>
		</List>
	);
}

export default withStyles(headerLinksStyle)(HeaderLinks);
