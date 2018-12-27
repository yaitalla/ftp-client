import React from 'react';
import { connect } from 'react-redux';
import { parts, hiddenHack, hr, icon, img } from './style';
import { computerChoice } from '../../actions';
import shifumi from '../navigation/shifumi.png';



const ComputerPage = (props) => {
    return 	(
      <div  style={parts}>
      <div>
      <h2>Computer</h2>
      <hr style={hr}/>
      </div>
      <div style={icon}>
      <img style={img} src={props.choice ? props.choice : shifumi}/>
      </div>
      <div style={hiddenHack}></div>
      
      </div>
   )
  }

const mapStateToProps = (state) => ({
  choice: state.computer.choice
});


export default connect(mapStateToProps, {computerChoice})(ComputerPage);
