import React from 'react';

class ChangeButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <button>{this.props.text}</button>
    )
  }
}

export default ChangeButton;