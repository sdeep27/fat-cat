import React from 'react';

class Button extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const { next } = this.props;
    return(
      <div>
        <button onClick={next}>NEXT CAT</button>
      </div>
    )
  }
}

export default Button;