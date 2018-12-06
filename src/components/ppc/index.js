import React from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router';
import { flexContainer, parts, hiddenHack,
  btnWrapper, hr, icon, btn, img } from './style';
import shi from './shi.png';
import fu from './fu.png';
import mi from './mi.png';

const Game = ({
	choice
}) => (

	<div style={flexContainer}>

    <div style={parts}>
      <div>
        <h2>Player</h2>
        <hr style={hr}/>
      </div>
      <div style={icon}></div>
      <div style={btnWrapper}>
        <button style={btn}><img src={shi} style={img}/></button>
        <button style={btn}><img src={fu} style={img}/></button>
        <button style={btn}><img src={mi} style={img}/></button>
      </div>
    </div>

    <div style={parts}>
      <div>
        <h2>Score</h2>
        <hr style={hr}/>
      </div>
    </div>

    <div style={parts}>
      <div>
        <h2>Computer</h2>
        <hr style={hr}/>
      </div>
      <div style={icon}></div>
      <div style={hiddenHack}></div>
    </div>
	</div>

);

Game.propTypes = {

};

export default Game;
