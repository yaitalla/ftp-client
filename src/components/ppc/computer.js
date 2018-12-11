import React from 'react';
import { connect } from 'react-redux';
import { flexContainer, parts, hiddenHack,
  btnWrapper, hr, icon, btn, img, scoreHist } from './style';
import shi from './shi.png';
import fu from './fu.png';
import mi from './mi.png';
import shifumi from '../navigation/shifumi.png';
import { bindActionCreators } from "redux";

const Computer = ({ history }) =>
<div style={parts}>
  <ComputerPage history={history} />
</div>

class ComputerPage extends React.Component {
  componentDidMount() {
    const {computerChoice} = this.props;
  }
  constructor(props) {
    super(props);
    this.state = {
      computerChoice: shifumi,
    };
  }

  render() {
    const {computerChoice} = this.props
    return 	(
      <div>
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
  choice: state.computer
});

const mapDispatchToProps = (dispatch) => ({
  computerChoice: (choice) => dispatch({type: 'COMPUTER_CHOICE', choice})
});

export default connect(mapStateToProps, mapDispatchToProps)(Computer);
