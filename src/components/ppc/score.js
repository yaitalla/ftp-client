import React from 'react';
import { connect } from 'react-redux';
import { parts, hr, scoreHist } from './style';

class ScorePage extends React.Component {
  componentDidUpdate() {
  }
  constructor(props) {
    super(props);
    this.state = {
      pchoice: '',
      cchoice: '',
      score: [],
      scoreMsg: "Play a new move to see the result"
    };
  }


  stringer = (rand) => {
    if (rand === shi) {
      return 'Rock';
    }
    return (rand === fu ? 'Cisors' : 'Paper');
  }


  render() {
    const { setScore } = this.props;
    return 	(
      <div  style={parts}>
        <div>
          <h2>Score</h2>
          <hr style={hr}/>

          {this.props.score.length ? Object.keys(this.props.score).map(key =>
            <div style={scoreHist} className="grid-item" key={key}>
              {this.props.score[key]}
            </div>
          ): this.state.scoreMsg}

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.score.score,
  pchoice: state.score.pchoice,
  cchoice: state.score.cchoice,
  scoreMsg: state.score.scoreMsg,
});


export default connect(mapStateToProps, )(ScorePage);
