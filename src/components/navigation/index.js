import React from 'react';
import { Link } from 'react-router-dom';
import { flexContainer, noBullet, item, img, btn } from './style';
import pic from './shifumi.png';

const Navigation = () =>

<div style={flexContainer}>

  <ul style={noBullet}>

    <li style={item}>
      <Link to={'/signup'}><button style={btn}> signup </button> </Link>
    </li>

      <li style={item}>
        <Link to={'/login'}><button style={btn}> login </button> </Link>
      </li>

    <li style={item}>
      <Link to={'/ftp'}><button style={btn}> ftp </button> </Link>
    </li>

    <li style={item}>
      <Link to={'/ppc'}><button style={btn}> <img style={img} src={pic}/> </button> </Link>
    </li>

  </ul>
</div>

export default Navigation;
