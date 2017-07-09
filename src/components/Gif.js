import React from 'react';

class Gif extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const { fetchCatsRequest } = this.props;
    fetchCatsRequest();
  }
  render(){
    const { allCats, index } = this.props;
    return(
      <div>
        <img src = {allCats[index]}/>
      </div>
    )
  }
}

export default Gif;