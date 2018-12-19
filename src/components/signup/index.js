import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from './Form';
import { flexwrap } from './style';
import axios from 'axios';


const Signup = ({ history }) =>
<div style={flexwrap}>
	<SignupPage history={history} />
</div>


class SignupPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: {},
			user : {
				email: '',
				password: '',
			}
		};

		this.updateUser = this.updateUser.bind(this);
		this.processForm = this.processForm.bind(this);
	}

	processForm(event) {
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
			console.log('clientLOG', res.data)
			history.push('/');
		}).catch((err) => {
			console.log('clientLOG', err)
		});
	}

	updateUser(event) {
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
