import React, { Component } from 'react';
import './App.scss';

class Gif extends Component {
  render() {
    const src=`https://media3.giphy.com/media/${this.props.id}/200.gif`
    return (
      <img className="gif" src={src} alt="gif"></img>
    )
  }
}

export default Gif;
