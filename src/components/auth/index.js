import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthForm from './AuthForm';
import { flexwrap } from './style';


const Auth = ({ history }) =>
<div style={flexwrap}>
	<AuthPage history={history} />
</div>


class AuthPage extends React.Component {
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
		event.preventDefault();
		console.log('email:', this.state.user.email);
		console.log('password:', this.state.user.password);
	}

	updateUser(event) {
		const field = event.target.name;
		const user = this.state.user;
		user[field] = event.target.value;
		this.setState({ user });
	}

	render() {
		return (
			<AuthForm
				onSubmit={this.processForm}
				onChange={this.updateUser}
				errors={this.state.errors}
				user={this.state.user}/>
		);
	}
}

export default withRouter(Auth);
