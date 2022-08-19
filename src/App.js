import React, { Component } from 'react';
import './App.scss';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

class App extends Component {
  render() {
    const gifs = [
      { id: "26tPplGWjN0xLybiU" },
      { id: "xU9TT471DTGJq" }
    ]
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="26tPplGWjN0xLybiU"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs}/>
        </div>
      </div>
    )
  }
}

export default App;
