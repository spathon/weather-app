import React from 'react';
import { connect } from 'react-redux';

import { setCity } from './actions'
import Search from './Search';
import Weather from './Weather';
import './App.css';

export const App = (props) => {

  const ErrorMessage = props.errorMessage
    ? <div className="error">{props.errorMessage}</div>
    : null;

  let weather = null;
  if (props.owm || props.yahoo || props.isLoading) {
    weather = <Weather {...props} />
  }

  function doSearch(value) {
    props.dispatch(setCity(value));
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Temperature</h1>
      </div>
      <div className="App-main">

        <Search doSearch={doSearch} />

        {ErrorMessage}

        {weather}

      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => state;

export default connect(mapStateToProps)(App);
