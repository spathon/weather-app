import React from 'react';

const getTemp = temp => {
  if (temp) return Math.round(temp) + '°';
  return '-';
}

let Weather = (props) => {

  const data = {
    owm: {},
    yahoo: {}
  };

  const Loading = <div className="is-loading">...</div>;

  if (!props.isLoading && props.city) {
    data.owm = {
      temp: props.owm.main.temp,
      city: `${props.owm.name}, ${props.owm.sys.country}`
    };
    data.yahoo = props.yahoo ? {
      temp: props.yahoo.channel.item.condition.temp,
      city: props.yahoo.channel.item.title
    } : { temp: null };
    if (data.owm && data.yahoo) {
      data.avg = Math.round( (parseFloat(data.owm.temp) + parseFloat(data.yahoo.temp)) / 2 );
    } else {
      data.avg = null;
    }
  }


  return (
    <div className="temp">
      <div className="temp__item">
        <h3>Open weather map</h3>
        <div className="box">
          {props.isLoading ? Loading : getTemp(data.owm.temp)}
        </div>
        <small>{data.owm.city}</small>
      </div>
      <div className="temp__item">
        <h3>Average</h3>
        <div className="box">
          {props.isLoading ? Loading : getTemp(data.avg)}
        </div>
      </div>
      <div className="temp__item">
        <h3>Yahoo weather</h3>
        <div className="box">
          {props.isLoading ? Loading : getTemp(data.yahoo.temp)}
        </div>
        <small>{data.yahoo.city}</small>
      </div>
    </div>
  );
}

export default Weather;
