import React from 'react';
import { connect } from 'react-redux';
import { flexContainer, parts, hiddenHack,
  btnWrapper, hr, icon, btn, img, scoreHist } from './style';
import { computerChoice, setScore } from '../../actions';
import shi from './shi.png';
import fu from './fu.png';
import mi from './mi.png';
import shifumi from '../navigation/shifumi.png';

class PlayerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choice: shifumi,
    };
    this.updatePlayer = this.updatePlayer.bind(this);
    this.setWinner = this.setWinner.bind(this);

  }
  stringer(rand){
    if (rand === shi) return 'Rock';
    return (rand === fu ? 'Cisors' : 'Paper');
  }
    updateScore(player, comput, playerWin){
      let score = playerWin === "u win" ? "Winner - Looser" : "Looser - Winner";
      if (playerWin === 'alité') { score = 'égalité' }
      let newScore = store.getState().score.score ? store.getState().score.score : [];
      newScore.push(score);
      setTimeout(() => {
          this.props.setScore(player, comput, newScore)
      }, 1000);

    }
  setWinner(player, comput){
    let ret = "";
    if (player === comput) {
      ret = 'egalité'
    } else {
      if (player === 'Rock'){
        ret = (comput === 'Paper' ? 'Rock vs Paper, you loose'
          : 'Rock vs Cisors, you win');
      } else if (player === 'Paper'){
        ret = (comput === 'Cisors' ? 'Paper vs Cisors, you loose'
          : 'Paper vs Rock, you win');
      } else {
        ret = (comput === 'Rock' ? 'Cisors vs Rock, you loose'
          : 'Cisors vs Paper, you win');
      }
    }
    this.updateScore(player, comput, ret.substr(ret.length - 5));
    return ret;
  }
  computer(playermove){
    const pos = [ shi, fu, mi ];
    const rand = pos[Math.floor(Math.random()*pos.length)];
    const computerMove = this.stringer(rand);
    const playerMove = this.stringer(playermove);
    setTimeout(() => {
        console.log('ordi: ', computerMove);
        this.props.computerChoice(rand)
    }, 1000);
    this.setWinner(playerMove, computerMove);
  }
  updatePlayer(event){
    event.preventDefault();
    this.setState({ choice: event.target.value })
    console.log('player: ',this.stringer(event.target.value))
    this.computer(event.target.value);
  }

  render() {
    const {  setScore} = this.props
    return 	(
        <div  style={parts}>
          <div>
            <h2>Player</h2>
            <hr style={hr}/>
          </div>
          <div style={icon}>
            <img style={img} src={this.state.choice}/>
          </div>
          <div style={btnWrapper}>
            <button onClick={this.updatePlayer} value={shi} style={btn}>Rock</button>
            <button onClick={this.updatePlayer} value={fu} style={btn}>Cisors</button>
            <button onClick={this.updatePlayer} value={mi} style={btn}>Paper</button>
          </div>
        </div>
    );
  }
}

export default connect(null, {computerChoice, setScore})(PlayerPage);
