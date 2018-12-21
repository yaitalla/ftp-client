import React from 'react';
import { Link } from 'react-router-dom';
import { flex, noBullet, btn, img } from './style';
import pic from './shifumi.png';


class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      token: ''
    };
    this.checkLocalStorage = this.checkLocalStorage.bind(this);
  }
  checkLocalStorage = () => {
    window.localStorage.setItem('token', '');
    console.log(window.localStorage.token);
  }
  check = () => {
    console.log(window.localStorage.token);
  }

  render() {
    return (
      <div style={flex}>
        <ul style={noBullet}>
          <Link to={'/'}><button onClick={this.checkLocalStorage} style={btn}> logout </button> </Link>
          <Link to={'/'}><button onClick={this.check} style={btn}> check </button> </Link>
          <Link to={'/ppc'}><button style={btn}> game </button> </Link>
          <Link to={'/signup'}><button style={btn}> signup </button> </Link>
          <Link to={'/login'}><button style={btn}> login </button> </Link>
          <Link to={'/ftp'}><button style={btn}> ftp </button> </Link>
        </ul>
      </div>
    )
  }
}
 export default Navbar;
