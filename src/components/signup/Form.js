import React from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router';
import { flexForm, flexUl, formTitle, input, submitBtn,
		flexContainer, flexInfo, infoTitle } from './style';

const loginFrom = ({
	onSubmit,
	onChange,
	errors,
	user
}) => (

	<div style={flexContainer}>
			<form  style={flexForm} onSubmit={onSubmit} method="post" action="http://localhost:4000/users/login">
				<ul style={flexUl}>
						<h4 style={formTitle} >Signup</h4>
						<input
							placeholder="Email..."
							style={input}
							label="Email"
							name="email"
							onChange={onChange}
							value={user.email}/>
						<input
							style={input}
							placeholder="Password..."
							label="Password"
							type="password"
							name="password"
							onChange={onChange}
							value={user.password}/>
						<button style={submitBtn} type="submit"  primary="true">
							Submit
						</button>
				</ul>

			</form>

				
	</div>

);

loginFrom.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
};

export default loginFrom;
