import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { flexContainer, parts, hiddenHack,
  btnWrapper, hr, icon, btn, img, scoreHist } from './style';
import shi from './shi.png';
import fu from './fu.png';
import { computerChoice } from '../../actions';
import mi from './mi.png';
import shifumi from '../navigation/shifumi.png';



class ComputerPage extends React.Component {
  componentDidUpdate(){
  //  console.log(this.props.choice)
  }
  componentDidMount(){
  }
  constructor(props) {
    super(props);
    this.state = {
      choice: shifumi,
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
          <img style={img} src={this.props.choice}/>
        </div>
        <div style={hiddenHack}></div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  choice: store.getState().computer.choice
});


export default connect(mapStateToProps, {computerChoice})(ComputerPage);
