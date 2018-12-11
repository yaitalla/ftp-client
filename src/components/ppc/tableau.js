import React from "react";
import { connect } from "react-redux";
import { hr, scoreHist } from './style';

const ConnectedList = ({ score }) => (
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

const mapStateToProps = state => {
  return { articles: state.articles };
};

export default connect(mapStateToProps)(ConnectedList);
