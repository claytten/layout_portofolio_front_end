import React from "react";
import axios from "axios";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


//core Components
import GridContainer from "components/grid/GridContainer.jsx";
import GridItem from "components/grid/GridItem.jsx";
import CustomInput from "components/customInput/CustomInput.jsx";
import Button from "components/customButtons/Button.jsx";


import ContactStyle from "assets/jss/material-kit-react/view/landingPageSections/contactStyle.jsx";

class Contact extends React.Component {
	constructor() {
		super()
		this.state = {
			name: '',
			email: '',
			message: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange = evt => {
		this.setState({ [evt.target.name] : evt.target.value})
	}

	async handleSubmit(evt) {
		evt.preventDefault();

		const { name, email, message } = this.state

		await axios.post('/send', {
			name,
			email,
			message
		})
	}
	render() {
		const { classes } = this.props;
		return(
			<div className={classes.container} >
				<GridContainer justify="center">
					<GridItem cs={12} sm={12} md={8}>
							<h3 className={classes.title}>Contact Me</h3>
				            <h4 className={classes.description}>
				              eDivide details about your product or agency work into parts. Write
				              a few lines about each one and contact us about any further
				              collaboration. We will responde get back to you in a couple of
				              hours.
				            </h4>
			            <form onSubmit={this.handleSubmit}>
			            	<GridContainer>
			            		<div className={classes.layoutForm}>
			            			<CustomInput 
			            				labelText="Your Name"
			            				id="name"
			            				name="name"
			            				fromControlProps={{
			            					fullWidth: true
			            				}}
			            				classes={{ formControl: classes.name}}
			            				onChanged={this.handleChange}
			            			/>
			            			<CustomInput 
			            				labelText="Your Email"
			            				id="email"
			            				name="email"
			            				fromControlProps={{
			            					fullWidth: true
			            				}}
			            				classes={{ formControl: classes.email}}
			            				onChanged={this.handleChange}
			            			/>
			            		
			            			<CustomInput 
			            				labelText="Your Message"
			            				id="message"
			            				name="message"
			            				fromControlProps={{
			            					fullWidth: true,
			            					className: classes.textArea
			            				}}
			            				inputProps={{
			            					multiline: true,
			            					rows: 5
			            				}}
			            				classes={{ formControl: classes.message}}
			            				onChanged={this.handleChange}
			            			/>
			            			<GridContainer >
										<GridItem
											xs={12}
											sm={12}
											md={4}
											className={classes.textCenter}
										>

											<Button type="submit" color="info">Send Message</Button>
										</GridItem>
									</GridContainer>
								</div>
			            	</GridContainer>
			            </form>
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}

export default withStyles(ContactStyle)(Contact);