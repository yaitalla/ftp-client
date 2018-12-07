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
      computChoice: shifumi,
      scoreMsg: "hello, my name is eminem"
    };
    this.updatePlayer = this.updatePlayer.bind(this);
    this.updateComput = this.updateComput.bind(this);
  }
  stringer(rand){
    if (rand === shi)
      return 'Rock';
    return (rand === fu ? 'Paper' : 'Cisors');       
  }
  setWinner(player, comput){
    let ret = "";
    if (player === comput) {
      ret = 'egalité'
    } else {
      if (player === 'Rock'){
        ret = (comput === 'Paper' ? 'Paper, you loose'
          : 'Cisors, you win');
      } else if (player === 'Paper'){
        ret = (comput === 'Cisors' ? 'Cisors, you loose'
          : 'Rock, you win');
      } else {
        ret = (comput === 'Rock' ? 'Rock, you loose'
          : 'Paper, you win');
      }
    }
    return ret;
  }

  updateComput(playerChoice){
    const pos = [ shi, fu, mi ];
    const rand = pos[Math.floor(Math.random()*pos.length)];
    const computerMove = this.stringer(rand);
    const playerMove = this.stringer(playerChoice);
    console.log(playerMove, computerMove)
    const score = this.setWinner(playerMove, computerMove);
    setTimeout(() => {
      this.setState({
        computChoice: rand,
        scoreMsg: `...${score}`
      });
    }, 1000);
  }
  updatePlayer(event){
    this.setState({
      scoreMsg: `you played ${this.stringer(event.target.value)} and Computer played...`,
      playerChoice: event.target.value,
    });
    this.updateComput(this.state.playerChoice);
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
            {this.state.scoreMsg}
          </div>
        </div>

        <div style={parts}>
          <div>
            <h2>Computer</h2>
            <hr style={hr}/>
          </div>
          <div style={icon}>
            <img style={img} src={this.state.computChoice}/>
          </div>
          <div style={hiddenHack}></div>
        </div>
    	</div>

    );
  }
}

export default Game;
