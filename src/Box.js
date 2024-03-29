import React from 'react';

const getTemp = temp => {
  if (temp !== null) return Math.round(temp) + '°';
  return '-';
};

// Display the city because the different APIs can show different cities
// autocomplete on the input could probably fix this

let Box = (props) => {

  const Loading = <div className="is-loading">...</div>;

  return (
    <div className="temp__item">
      <h3>{props.title}</h3>
      <div className="box">
        {props.isLoading ? Loading : getTemp(props.temp)}
      </div>
      <small>{props.city}</small>
    </div>
  );
}

export default Box;
