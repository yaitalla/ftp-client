import React from 'react';
import { connect } from 'react-redux';
import { flexContainer, parts, hiddenHack,
  btnWrapper, hr, icon, btn, img, scoreHist } from './style';
import shi from './shi.png';
import fu from './fu.png';
import { computerChoice } from '../../actions';

import mi from './mi.png';
import shifumi from '../navigation/shifumi.png';
import { bindActionCreators } from "redux";



class ComputerPage extends React.Component {
  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.setState({computerChoice: store.getState().computer.choice})
    })
    this.state = {
      computerChoice: shifumi,
    };
  }

  render() {
    const {computerChoice} = this.props
    return 	(
      <div  style={parts}>
        <div>
          <h2>Computer</h2>
          <hr style={hr}/>
        </div>
        <div style={icon}>
          <img style={img} src={this.state.computerChoice}/>
        </div>
        <div style={hiddenHack}></div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  computerChoicechoice: state.computerChoice
});

export default connect(mapStateToProps)(ComputerPage);
