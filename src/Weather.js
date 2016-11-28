import React from 'react';
import Box from './Box';

let Weather = (props) => {

  const data = {
    owm: { title: 'Open weather map' },
    avg: { title: 'Average' },
    yahoo: { title: 'Yahoo weather' }
  };

  if (!props.isLoading && props.city) {
    data.owm.temp = props.owm.main
      ? props.owm.main.temp
      : null;
    data.owm.city = props.owm.sys
      ? `${props.owm.name}, ${props.owm.sys.country}`
      : 'No city found';

    data.yahoo.temp = props.yahoo
      ? parseFloat(props.yahoo.channel.item.condition.temp)
      : null;
    data.yahoo.city = props.yahoo 
      ? props.yahoo.channel.item.title
      : 'No city found';

    if (data.owm.temp !== null && data.yahoo.temp !== null) {
      data.avg.temp = Math.round( (data.owm.temp + data.yahoo.temp) / 2 );
    } else {
      data.avg.temp = null;
    }
  }

  return (
    <div className="temp">
      <Box isLoading={props.isLoading} {...data.owm} />
      <Box isLoading={props.isLoading} {...data.avg} />
      <Box isLoading={props.isLoading} {...data.yahoo} />
    </div>
  );
};

export default Weather;
