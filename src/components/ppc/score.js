import React from 'react';
import { connect } from 'react-redux';
import { flexContainer, parts, hiddenHack,
  btnWrapper, hr, icon, btn, img, scoreHist } from './style';

const Score = ({ history }) =>
<div style={parts}>
  <ScorePage history={history} />
</div>

class ScorePage extends React.Component {
  componentDidMount() {
  }
  constructor(props) {
    super(props);
    this.state = {
      pchoice: '',
      cchoice: '',
      score: [],
      scoreMsg: "Play a new move to see the result"
    };
    this.setWinner = this.setWinner.bind(this);
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
    setTimeout(() => {
      this.updateScore(ret.substr(ret.length - 5));
    }, 1000);
    return ret;
  }
  stringer(rand){
    if (rand === shi) {
      return 'Rock';
    }
    return (rand === fu ? 'Cisors' : 'Paper');
  }

  updateScore(playerWin){
    let score = playerWin === "u win" ? "Winner - Looser" : "Looser - Winner";
    if (playerWin === 'egalité') { score = playerWin }
    const newScore = this.state.score;
    newScore.push(score);
    this.setState({
      score: newScore
    });
  }

  render() {
    return 	(
      <div>
        <div>
          <h2>Score</h2>
          <hr style={hr}/>

          {Object.keys(this.state.score).map(key =>
            <div style={scoreHist} className="grid-item" key={key}>
              {this.state.score[key]}
            </div>
          )}

          {this.state.scoreMsg}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.score,
  pchoice: state.pchoice,
  cchoice: state.cchoice,
  scoreMsg: state.scoreMsg
});


export default connect(mapStateToProps)(Score);
