import React from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router';
//import Icon from './icon';
import { flexContainer, parts, hiddenHack,
  btnWrapper, hr, icon, btn, img } from './style';
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
    this.state = {
      playerChoice: shifumi,
      computChoice: {}
    };
    this.updatePlayer = this.updatePlayer.bind(this);
  //  this.updateComput = this.updateComput.bind(this);
  }
  updatePlayer(event){
    this.setState({ playerChoice: event.target.value})
  }
  render() {
    return 	(
      <div style={flexContainer}>

        <div style={parts}>
          <div>
            <h2>Player</h2>
            <hr style={hr}/>
          </div>
          <div style={icon}>
            <img style={img} src={this.state.playerChoice}/>
          </div>
          <div style={btnWrapper}>
            <button onClick={this.updatePlayer} value={shi} style={btn}>Rock</button>
            <button onClick={this.updatePlayer} value={fu} style={btn}>Cisors</button>
            <button onClick={this.updatePlayer} value={mi} style={btn}>Paper</button>
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
  }
}

export default Game;
