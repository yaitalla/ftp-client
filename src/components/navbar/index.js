import React from 'react';
import { Link } from 'react-router-dom';
import { flex, noBullet, btn, img } from './style';
import pic from './shifumi.png';


class Navbar extends React.Component {
  constructor(props){
    super(props);
  }
  logout = () => {
    window.localStorage.setItem('token', '');
  }
 

  render() {
    return (
      <div style={flex}>
        <ul style={noBullet}>
          <Link to={'/'}><button onClick={this.logout} style={btn}> logout </button> </Link>
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
