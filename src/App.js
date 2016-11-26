import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Temperature</h1>
        </div>
        <div className="App-main">

          <form className="search">
            <input />
            <button className="search__button">🔍</button>
          </form>

          <div className="temp">
            <div className="temp__item">
              <h3>API 1</h3>
              <div className="box">
                4°
              </div>
            </div>
            <div className="temp__item">
              <h3>Average</h3>
              <div className="box">
                5°
              </div>
            </div>
            <div className="temp__item">
              <h3>API 2</h3>
              <div className="box">
                6°
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
