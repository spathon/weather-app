
export const setCity = (city) => {

  const yql = `select item from weather.forecast where woeid in (select woeid from geo.places(1) where text='${city}') and u='c'`;
  const yahoo = `https://query.yahooapis.com/v1/public/yql?q=${yql}&format=json`;

  const owm = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_OWM}`;

  return (dispatch) => {

    dispatch({ type: 'LOADING_WEATHER' });

    const owmData = fetch(owm).then((res) => res.json());
    const yahooData = fetch(yahoo).then((res) => res.json());

    return Promise.all([owmData, yahooData]).then(values => {
      return dispatch({
        type: 'SET_WEATHER',
        city,
        owm: values[0],
        yahoo: values[1].query.results
      });
    }).catch(err => {
      console.error('Loading failed:', err);
      return dispatch({ type: 'LOADING_ERROR', message: err.message });
    });
  }
}
