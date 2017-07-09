import React from 'react';
import Gif from './Gif';
import Button from './Button';
import { connect } from 'react-redux';
import { FETCH_CATS_REQUEST, FETCH_CATS_SUCCESS, FETCH_CATS_FAILURE, NEXT_CAT } from '../actions';

class GifContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    console.log('these are props: ', this.props)
    const {fetchCatsRequest, next, index, allCats} = this.props
    return (
      <div>
        <Gif fetchCatsRequest = {fetchCatsRequest} allCats = {allCats} index = {index}/>
        <Button next = {next} />
      </div>
    )
  } 
}

function mapStateToProps(state){
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    fetchCatsRequest: () => dispatch({type: FETCH_CATS_REQUEST}),
    next: () => dispatch({type: NEXT_CAT})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(GifContainer);