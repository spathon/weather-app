import React from 'react';
import { connect } from 'react-redux'
import { setCity } from './actions'

let Search = ({ dispatch }) => {
  let input;

  const onSubmit = e => {
    e.preventDefault();
    if (!input.value.trim()) return;

    dispatch(setCity(input.value));
  };

  return (
    <form onSubmit={onSubmit} className="search">
      <input ref={node => { input = node }} />
      <button className="search__button">🔍</button>
    </form>
  );
}

Search = connect()(Search);

export default Search;
