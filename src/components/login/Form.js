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
					<li>
						<h4 style={formTitle} >Login</h4>
					</li>
					<li>
						<input
							placeholder="Email..."
							style={input}
							label="Email"
							name="email"
							onChange={onChange}
							value={user.email}/>
					</li>
					<li>
						<input
							style={input}
							placeholder="Password..."
							label="Password"
							type="password"
							name="password"
							onChange={onChange}
							value={user.password}/>
					</li>
					<li>
						<button style={submitBtn} type="submit"  primary="true">
							Submit
						</button>
					</li>
				</ul>

			</form>

				<div style={flexInfo}>
					<h2 style={infoTitle}>Welcome to Whis</h2>
					<i  aria-hidden="true"></i>
					<p>Digital consulting</p>
				</div>
	</div>

);

loginFrom.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
};

export default loginFrom;
