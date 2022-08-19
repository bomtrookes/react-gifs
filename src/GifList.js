import React, { Component } from 'react';
import './App.scss';
import Gif from './Gif'

class GifList extends Component {
  render() {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} />
      })
  }
}

export default GifList;
