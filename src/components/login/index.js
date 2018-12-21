import React, {PropTypes} from 'react';
import { withRouter } from 'react-router-dom';
import Form from './Form';
import { flexwrap } from './style';
import axios from 'axios';


const Login = ({ history }) =>
<div style={flexwrap}>
	<LoginPage history={history} />
</div>


class LoginPage extends React.Component {
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
		}
		const headers = {
			'x-access-token': window.localStorage.getItem('token')
		}
	//	console.log(this.props);
		axios.post("http://localhost:4000/api/user/login/", data, {headers: headers}).then((res) => {
			if(res.data === '')
			window.localStorage.setItem('token', res.data.token);
		//	console.log(window.localStorage.token
//		if ()
	//		history.push('/ftp');

		}).catch((err) => {
			console.log('YASLOG', err)
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

export default withRouter(Login);
