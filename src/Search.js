import React from 'react';
import { connect } from 'react-redux'
import { setCity } from './actions'

// Possible improvements:
// - The update could be done on key strokes but requires much more API lookups
// - Connect google/yahoo? maps API to autocomplete / suggest city
//   for more accurate weather lookup and the weather API could be called on select


let Search = ({ dispatch }) => {
  let input;

  const onSubmit = e => {
    e.preventDefault();
    if (!input.value.trim()) return;

    dispatch(setCity(input.value));
  };

  return (
    <form onSubmit={onSubmit} className="search">
      <input placeholder="Enter city" ref={node => { input = node }} />
      <button className="search__button">🔍</button>
    </form>
  );
};

Search = connect()(Search);

export default Search;
