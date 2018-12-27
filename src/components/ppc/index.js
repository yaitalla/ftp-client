import React from 'react';
import Player from './player';
import Computer from './computer';
import Score from './score';
import { flexContainer } from './style';


const Game = () => (
      <div style={flexContainer}>
        <Player />
        <Score />
        <Computer />
      </div>
);

export default Game;
