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
  }
  render() {
    return (
      <div style={flex}>
        <ul style={noBullet}>
          <Link to={'/'}><button style={btn}> home </button> </Link>
          <Link to={'/signup'}><button style={btn}> signup </button> </Link>
          <Link to={'/login'}><button style={btn}> login </button> </Link>
        </ul>
      </div>
    )
  }
}
 export default Navbar;
