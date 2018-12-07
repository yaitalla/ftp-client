import React from 'react';
import shi from './shi.png';
import fu from './fu.png';
import mi from './mi.png';

const icon = ({choice}) => {
  <div>
    <img src={choice}/>
  </div>
}

icon.PropTypes = {
  choice: PropTypes.object
}

export default icon;

class Icon extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      choice: ''
    };
    this.updatePic = this.updatePic.bind(this);
  }
  updatePic(event) {

  }
  render() {
    return (
      <div>
        <img src={}/>
      </div>
    );
  }
}
