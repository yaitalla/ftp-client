import React from 'react';
import { connect } from 'react-redux';
import { flexContainer, parts, hiddenHack,
  btnWrapper, hr, icon, btn, img, scoreHist } from './style';
import { computerChoice, playerChoice } from '../../actions';
import {bindActionCreators} from 'redux';
import shi from './shi.png';
import fu from './fu.png';
import mi from './mi.png';
import shifumi from '../navigation/shifumi.png';

const Player = () =>
<div style={parts}>
  <PlayerPage  />
</div>

class PlayerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: shifumi,
    };
    this.updatePlayer = this.updatePlayer.bind(this);
  }
  stringer(rand){
    if (rand === shi) return 'Rock';
    return (rand === fu ? 'Cisors' : 'Paper');
  }
  computer(){
    const pos = [ shi, fu, mi ];
    const rand = pos[Math.floor(Math.random()*pos.length)];
    const computerMove = this.stringer(rand);
    setTimeout(() => {
        console.log('ordi: ', computerMove);

    }, 1000);
    return computerMove;
  }
  updatePlayer(event){
    console.log('props = ', this.props)
    event.preventDefault();
    this.props.playerChoice(event.target.value)
    this.setState({ choice: event.target.value })
    console.log('player: ',this.stringer(event.target.value))
    this.computer();
    console.log(store.getState())
  }

  render() {
    const {playerChoice} = this.props
    return 	(
        <div >
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


export default connect(null, { playerChoice })(PlayerPage);
