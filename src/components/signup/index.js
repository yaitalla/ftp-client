import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from './Form';
import axios from 'axios';




class Signup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: {},
			user : {
				email: '',
				password: '',
			}
		};
	}

	processForm = (event) => {
		const { history } = this.props;
		event.preventDefault();
		const data = {
			'email': this.state.user.email,
			'password': this.state.user.password,
			'headers': {
				"Access-Control-Allow-Origin": "*"
			}
		}
		axios.post("http://localhost:4000/api/user/register/", data).then((res) => {
		//	console.log('clientLOG', res.data)
			history.push('/');
		}).catch((err) => {
			console.log('clientLOG', err)
		});
	}
/*
	getData = () => {
		const opts = {
			method: 'GET',
			url: 'http://',
			headers: {
				authorization: window.localStorage.get('token')
			}
		}
	}
*/
	updateUser = (event) => {
		const field = event.target.name;
		const user = this.state.user;
		user[field] = event.target.value;
		this.setState({ user });
	}

	render() {
		return (
			<Form
				onSubmit={this.processForm}
				onChange={this.updateUser}
				errors={this.state.errors}
				user={this.state.user}/>
		);
	}
}

export default withRouter(Signup);
