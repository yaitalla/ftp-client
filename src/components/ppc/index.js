import React from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router';
import Player from './player';
import Computer from './computer';
import Score from './score';
import { flexContainer, parts, hiddenHack,
  btnWrapper, hr, icon, btn, img, scoreHist } from './style';
import shi from './shi.png';
import fu from './fu.png';
import mi from './mi.png';
import shifumi from '../navigation/shifumi.png';

const Game = ({ history }) =>
<div style={flexContainer}>
  <GamePage history={history} />
</div>

class GamePage extends React.Component {
  constructor(props) {
    super(props);
}
  render() {
    return 	(
      <div style={flexContainer}>

        <Player />
        <Score />
        <Computer />

      </div>

    );
  }
}

export default Game;
