import React from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router';
import { flexContainer, parts,
  btnWrapper, hr, icon, btn } from './style';

const Game = ({
	onSubmit,
	onChange,
	errors,
	user
}) => (

	<div style={flexContainer}>

    <div style={parts}>
      <div>
        <h2>Player</h2>
        <hr style={hr}/>
      </div>
      <div style={icon}>
      </div>
      <div style={btnWrapper}>
        <button style={btn}></button>
        <button style={btn}></button>
        <button style={btn}></button>
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
    </div>
	</div>

);

Game.propTypes = {

};

export default Game;
