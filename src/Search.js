import React from 'react';

// Possible improvements:
// - The update could be done on key strokes but requires much more API lookups
// - Connect google/yahoo? maps API to autocomplete / suggest city
//   for more accurate weather lookup and the weather API could be called on select

let Search = (props) => {
  let input;

  const onSubmit = e => {
    e.preventDefault();
    if (!input.value.trim()) return;

    props.doSearch(input.value);
  };

  return (
    <form onSubmit={onSubmit} className="search">
      <input placeholder="Enter city" ref={node => { input = node }} />
      <button className="search__button">🔍</button>
    </form>
  );
};

export default Search;
