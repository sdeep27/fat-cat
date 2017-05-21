import React from 'react';
import ChangeButton from './ChangeButton';

class Gif extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgs: [],
      currentImg: -1,
      offset: 0
    };
    this.nextCat = this.nextCat.bind(this);
  }
  pushImgs (urls) {
    this.setState({imgs: [...this.state.imgs, ...urls]})
  }
  extractRelevantData (giphyJson) {
    const urls = [];
    giphyJson.data.forEach(item => {
      if (item.images.fixed_height.url) urls.push(item.images.fixed_height.url)
    })
    return urls;
  }
  getCat (searchTerm) {
    //store api_key as environment variable for production but this is publicly available on giphy github
    console.log('offset ', this.state.offset);
    const API_KEY = "dc6zaTOxFJmzC"
    const baseUrl = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=5&offset=${this.state.offset}`
    fetch(baseUrl)
      .then(response => response.json())
      .then(jsonData => this.extractRelevantData(jsonData))
      .then(urls => this.pushImgs(urls))
      .catch(err => console.log(err))
  }
  nextCat () {
    //check  if queue is running low, and populate with more unique cats using giphy offset parameter
    if (this.state.imgs.length - this.state.currentImg <= 3) {
      this.setState({offset: this.state.offset + 5}, () => this.getCat('cat'));
      this.setState({currentImg: this.state.currentImg + 1});
    }
    else this.setState({currentImg: this.state.currentImg + 1});
  }
  shouldComponentUpdate(nextProps, nextState) {
    //only rerender if a new image is requested
    if (nextState.currentImg === this.state.currentImg) {
      return false;
    }
    else return true;
  }
  componentDidMount(){
    this.getCat('cat');
  }
  render () {
    return (
      <div>
        <button onClick = {this.nextCat}>Give me a cat</button>
        <div className = 'gifLocation'>
          <img src = {this.state.imgs[this.state.currentImg]} />
        </div>
      </div>
    )
  }
  
}

export default Gif;